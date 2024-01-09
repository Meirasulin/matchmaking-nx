
CREATE DATABASE  "matching"

CREATE SCHEMA matching

CREATE TABLE matching.Matchmakers (
matchmakerId serial PRIMARY KEY NOT NULL,
firstName TEXT NOT NULL,
lastDate TEXT NOT NULL,
birthDate TEXT NOT NULL,
email text Unique NOT NULL,
phoneNumber TEXT NOT NULL Unique,
gender TEXT NOT NULL CHECK (gender = 'male' OR gender = 'female'),
specialization TEXT NOT NULL,
password TEXT NOT NULL);


DROP TABLE matching.Female

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
higherEducation TEXT,
educationName TEXT
higherEducationAcademy TEXT,
jobStatus TEXT NOT NULL,
jobCompany TEXT,
seminar TEXT NOT NULL,
headwear TEXT NOT NULL,
pelKoshers TEXT NOT NULL,
fatherName TEXT,
motherName TEXT,
maritalStatus TEXT NOT NULL,
imgLink TEXT);

CREATE TABLE matching.Male(
matchMaleId serial PRIMARY KEY NOT NULL,
firstName TEXT NOT NULL,
lastDate TEXT NOT NULL,
birthDate TEXT NOT NULL,
email text Unique NOT NULL,
phoneNumber TEXT NOT NULL Unique,
password TEXT NOT NULL,
currentAddress TEXT ,
socialReference TEXT NOT NULL,
height NUMERIC NOT NULL,
yeshiva TEXT NOT NULL,
torahStudyStatus TEXT NOT NULL,
higherEducation TEXT,
higherEducationAcademy TEXT,
jobStatus TEXT NOT NULL,
jobCompany TEXT NOT NULL,
seminar TEXT NOT NULL,
headwear TEXT NOT NULL,
pelKoshers TEXT NOT NULL,
fatherName TEXT,
mother TEXT,
maritalStatus TEXT NOT NULL,
imgLink TEXT);


CREATE TYPE matching.user_login_info AS (
 password TEXT, email TEXT
);


-- CREATE FUNCTION login_female(email text, password text)
-- RETURNS user_info_for_login AS $$
--     IF NOT EXISTS (SELECT * FROM female WHERE email = login_female.email AND password = login_female.password) THEN
--         RAISE EXCEPTION 'Invalid email or password';
--     END IF;
--   RETURN (email, password)::user_info;
-- $$ LANGUAGE sql;



CREATE FUNCTION decrypt_password_function(encrypted_password text) 
RETURNS text AS $$
DECLARE 
   decrypted_password text;
BEGIN
  
  SELECT matching.pgp_sym_decrypt(encrypted_password::bytea, '10')
  INTO decrypted_password;
  
  IF decrypted_password IS NULL THEN
    RAISE EXCEPTION 'Failed to decrypt password';
  END IF;

  RETURN decrypted_password;
  
END;
$$ LANGUAGE plpgsql;




CREATE FUNCTION female_login_token(email text, password text) 
RETURNS user_info_for_login AS $$

DECLARE
  hashed_password text;

BEGIN

  SELECT matching.decrypt_password_function(matching.female.password) 
  INTO hashed_password
  FROM matching.female 
  WHERE matching.female.email = female_login_token.email;
  
  IF hashed_password IS NULL THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

  IF NOT hashed_password =  female_login_token.password THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

  RETURN (matching.female.email, hashed_password)::user_info_for_login;

END;
$$ LANGUAGE plpgsql;
























CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION pgcrypto;

SELECT pgp_sym_encrypt('test', 'key');
SELECT pgp_sym_decrypt('\xC30D040703027D952C91FB3674E675D2350172E6A19737360EA7C1CF8382825DE1FA43071360D93F471801A9EF4DC077BA3935270BAD6ED1FE5C1B44261C2F91BC3758BD36FF', 'key');














SELECT * FROM pg_extension WHERE extname = 'pgcrypto';



SELECT n.nspname, p.proname, pg_catalog.pg_get_function_arguments(p.oid) as params
FROM   pg_catalog.pg_proc p
JOIN   pg_catalog.pg_namespace n ON n.oid = p.pronamespace
WHERE  p.proname ~~* '%pgp_sym_decrypt%'
AND    pg_catalog.pg_function_is_visible(p.oid);