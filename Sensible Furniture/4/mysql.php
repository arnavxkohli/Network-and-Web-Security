<!--?php
  // create a connection the database engine
  $db = mysql_connect("127.0.0.1", "csecvm", "H93AtG6akq");
  if(!$db)
    die("Couldn't connect to the MySQL server.");

  // change database
  $use = mysql_select_db("csecvm", $db);
  if(!$use)
    die("Couldn't select database.");
?-->
