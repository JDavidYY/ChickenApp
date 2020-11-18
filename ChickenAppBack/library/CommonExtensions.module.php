<?php

function GetBoolean($data){
	$data = strtolower($data);
	$rtn = ($data == "true" || $data == "1");
	return ($rtn ? "true" : "false");
}

?>