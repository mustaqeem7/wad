<?php

require "dbconnection.php";

function getCategory(){

   global $conn;
   
   $getCatsQuery =  "select * from categories";
   $getCatsResult = mysqli_query($conn,$getCatsQuery);

   while($row = mysqli_fetch_assoc($getCatsResult))
   {
       $id = $row["CatID"];
       $title = $row["CatName"];
       echo "<li><a class='nav-link' href='#'>$title</a><li>";
   }
}

function getBrands(){

   global $conn;
   
   $getBrandQuery =  "select * from brands";
   $getBrandResult = mysqli_query($conn,$getBrandQuery);

   while($row = mysqli_fetch_assoc($getBrandResult))
   {
       $id = $row["BrandID"];
       $title = $row["BrandName"];
       echo "<li><a class='nav-link' href='#'>$title</a><li>";
   }
}

function getInsertCategory(){

   global $conn;
   
   $getCatsQuery =  "select * from categories";
   $getCatsResult = mysqli_query($conn,$getCatsQuery);

   while($row = mysqli_fetch_assoc($getCatsResult))
   {
       $id = $row["CatID"];
       $title = $row["CatName"];
       echo "<option>$title<option>";
   }
}

function getInsertBrands(){

   global $conn;
   
   $getBrandQuery =  "select * from brands";
   $getBrandResult = mysqli_query($conn,$getBrandQuery);

   while($row = mysqli_fetch_assoc($getBrandResult))
   {
       $id = $row["BrandID"];
       $title = $row["BrandName"];
       echo "<option>$title<option>";
   }
}