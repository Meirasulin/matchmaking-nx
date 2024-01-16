-- Active: 1704277540574@@127.0.0.1@5432@Matching

CREATE DATABASE "Matching"

CREATE SCHEMA matching


CREATE TABLE matching.Matchmakers (
matchmakerId serial PRIMARY KEY NOT NULL,
firstName TEXT NOT NULL,
lastName TEXT NOT NULL,
birthDate TEXT NOT NULL,
email text Unique NOT NULL,
phoneNumber TEXT NOT NULL Unique,
gender TEXT NOT NULL CHECK (gender = 'male' OR gender = 'female'),
specialty TEXT NOT NULL,
password TEXT NOT NULL);


DROP TABLE matching.male



CREATE TABLE matching.Female(
matchFemaleId serial PRIMARY KEY NOT NULL,
firstName TEXT NOT NULL,
lastName TEXT NOT NULL,
birthDate TEXT NOT NULL,
email text Unique NOT NULL,
phoneNumber TEXT NOT NULL Unique,
password TEXT NOT NULL,
currentAddress TEXT ,
origin TEXT NOT NULL,
height NUMERIC NOT NULL,
higherEducation TEXT NOT NULL,
educationName TEXT,
higherEducationAcademy TEXT,
jobStatus TEXT NOT NULL,
jobCompany TEXT,
seminar TEXT NOT NULL,
headwear TEXT NOT NULL,
pelKoshers TEXT NOT NULL,
fatherName TEXT,
motherName TEXT,
maritalStatus TEXT NOT NULL,
gender TEXT NOT NULL CHECK (gender = 'male' OR gender = 'female'),
imgLink TEXT);

CREATE TABLE matching.Male(
matchMaleId serial PRIMARY KEY NOT NULL,
firstName TEXT NOT NULL,
lastName TEXT NOT NULL,
birthDate TEXT NOT NULL,
email text Unique NOT NULL,
phoneNumber TEXT NOT NULL Unique,
password TEXT NOT NULL,
currentAddress TEXT ,
origin TEXT NOT NULL,
height NUMERIC NOT NULL,
yeshiva TEXT NOT NULL,
torahStudyStatus TEXT NOT NULL,
higherEducation TEXT NOT NULL,
educationName TEXT,
higherEducationAcademy TEXT,
jobStatus TEXT NOT NULL,
jobCompany TEXT NOT NULL,
headwear TEXT NOT NULL,
pelKoshers TEXT NOT NULL,
fatherName TEXT,
motherName TEXT,
maritalStatus TEXT NOT NULL,
gender TEXT NOT NULL CHECK (gender = 'male' OR gender = 'female'),
imgLink TEXT);


CREATE TYPE matching.token AS (
 password TEXT, email TEXT
);

CREATE TYPE matching.login_response AS (
  jwt_token matching.token,
  user_details  json
);





CREATE FUNCTION matching.decrypt_password_function(encrypted_password text) 
RETURNS text AS $$
DECLARE 
   decrypted_password text;
BEGIN
  
  SELECT matching.pgp_sym_decrypt(encrypted_password::bytea, 'secret_key')
  INTO decrypted_password;
  
  IF decrypted_password IS NULL THEN
    RAISE EXCEPTION 'Failed to decrypt password';
  END IF;

  RETURN decrypted_password;
  
END;
$$ LANGUAGE plpgsql;














CREATE FUNCTION matching.login(email text, password text, tablename text) 
RETURNS matching.login_response AS $$

DECLARE
  hashed_password text;
  male matching.Male;
  female matching.Female;
  matchmakers matching.Matchmakers;
  user_json json;
BEGIN
-- 
IF login.tablename = 'female' THEN
  SELECT matching.decrypt_password_function(matching.Female.password) 
  INTO hashed_password
  FROM matching.Female 
  WHERE matching.Female.email = login.email;

  SELECT a.*
  INTO female
  FROM matching.Female as a
  WHERE a.email = login.email;

  
  IF hashed_password IS NULL THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

  IF NOT hashed_password =  login.password THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

   user_json = json_build_object(
    'matchfemaleid', female.matchFemaleId,
'firstname', female.firstName,
'lastname', female.lastName,
'birthdate', female.birthDate,
'email', female.email,
'phonenumber', female.phoneNumber,
'currentaddress', female.currentAddress,
'origin', female.origin,
'height', female.height,
'highereducation', female.higherEducation,
'educationname', female.educationName,
'highereducationacademy', female.higherEducationAcademy,
'jobstatus', female.jobStatus,
'jobcompany', female.jobCompany,
'seminar', female.seminar,
'headwear', female.headwear,
'pelkoshers', female.pelKoshers,
'fathername', female.fatherName,
'mothername', female.motherName,
'maritalstatus', female.maritalStatus,
'gender', female.gender,
'imglink', female.imgLink
   );
   RETURN ROW(
    ROW(female.email,
      female.password)::matching.token,
      user_json
    )::matching.login_response;
  END IF;
--  ----------------------------------------------------------
  IF matching.tablename = 'male' THEN
  SELECT matching.decrypt_password_function(matching.Male.password) 
  INTO hashed_password
  FROM matching.Male 
  WHERE matching.Male.email = login.email;

  SELECT a.*
  INTO male
  FROM matching.Male as a
  WHERE a.email = login.email;

  
  IF hashed_password IS NULL THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

  IF NOT hashed_password =  login.password THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

   user_json = json_build_object(
    'matchmaleid', male.matchMaleId
'firstname', male.firstName,
'lastname', male.lastName
'birthdate', male.birthDate
'email', male.email
'phonenumber', male.phoneNumber
'currentaddress', male.currentAddress
'origin', male.origin
'height', male.height
'yeshiva', male.yeshiva
'torahstudystatus', male.torahStudyStatus
'highereducation', male.higherEducation
'educationname', male.educationName
'highereducationacademy', male.higherEducationAcademy
'jobstatus', male.jobStatus
'jobcompany', male.jobCompany
'headwear', male.headwear
'pelkoshers', male.pelKoshers
'fathername', male.fatherName
'mothername', male.motherName
'maritalstatus', male.maritalStatus
'gender', male.gender,
'imglink', male.imgLink
   );
   RETURN ROW(
    ROW(male.email,
      male.password)::matching.token,
      user_json
    )::matching.login_response;
  END IF;



-- -------------------------------------------
  IF matching.tablename = 'matchmakers' THEN
  SELECT matching.decrypt_password_function(matching.Matchmakers.password) 
    INTO hashed_password
  FROM matching.Matchmakers 
  WHERE matching.Matchmakers.email = login.email;

  SELECT a.*
  INTO matchmakers
  FROM matching.Matchmakers as a
  WHERE a.email = login.email;

  
  IF hashed_password IS NULL THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

  IF NOT hashed_password =  login.password THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

   user_json = json_build_object(
    'matchmakerid', matchmakers.matchmakerId
'firstname', matchmakers.firstName,
'lastname', matchmakers.lastName
'birthdate', matchmakers.birthDate
'email', matchmakers.email
'phonenumber', matchmakers.phoneNumber
'specialty', matchmakers.specialty
'gender', matchmakers.gender

   );
   RETURN ROW(
    ROW(matchmakers.email,
      matchmakers.password)::matching.token,
      user_json
    )::matching.login_response;
  END IF;

END;
$$ LANGUAGE plpgsql;




















CREATE EXTENSION IF NOT EXISTS pgcrypto SCHEMA matching;


CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION pgcrypto;

SELECT matching.pgp_sym_encrypt('test', 'key');
SELECT matching.pgp_sym_decrypt('\xC30D040703027D952C91FB3674E675D2350172E6A19737360EA7C1CF8382825DE1FA43071360D93F471801A9EF4DC077BA3935270BAD6ED1FE5C1B44261C2F91BC3758BD36FF', 'key');




CREATE FUNCTION matching.password_encrypt() 
RETURNS trigger AS $$
BEGIN
  NEW.password = matching.pgp_sym_encrypt(NEW.password, 'secret_key');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER password_encrypt 
BEFORE INSERT ON matching.Female
FOR EACH ROW 
EXECUTE PROCEDURE matching.password_encrypt();


CREATE TRIGGER password_encrypt 
BEFORE INSERT ON matching.male
FOR EACH ROW 
EXECUTE PROCEDURE matching.password_encrypt();

CREATE TRIGGER password_encrypt 
BEFORE INSERT ON matching.matchmakers
FOR EACH ROW 
EXECUTE PROCEDURE matching.password_encrypt();




SELECT * FROM pg_extension WHERE extname = 'pgcrypto';



SELECT n.nspname, p.proname, pg_catalog.pg_get_function_arguments(p.oid) as params
FROM   pg_catalog.pg_proc p
JOIN   pg_catalog.pg_namespace n ON n.oid = p.pronamespace
WHERE  p.proname ~~* '%pgp_sym_decrypt%'
AND    pg_catalog.pg_function_is_visible(p.oid);