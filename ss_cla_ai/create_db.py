# pylint: disable=no-member
import pymysql
from os import getenv
import traceback
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()


def create_database(db_name):
    try:
        mysql_conn = pymysql.connect(
            host=getenv("MYSQL_HOST"),
            user=getenv("MYSQL_USER"),
            password=getenv("MYSQL_PASS"),
            port=int(getenv("MYSQL_PORT")),
        )
        cur = mysql_conn.cursor()
        cur.execute("SHOW DATABASES")
        dbs = []
        for i in cur.fetchall():
            dbs += i
        if db_name not in dbs:
            cur.execute(f"CREATE DATABASE IF NOT EXISTS {db_name}")
            print(f"INFO - {datetime.now()} {db_name} database successfully created...")
        else:
            print(f"ERROR - {datetime.now()} {db_name} database already existed...")
        mysql_conn.close()
    except Exception:
        print(traceback.format_exc())


db_name = getenv("MYSQL_DB")
create_database(db_name=db_name)
