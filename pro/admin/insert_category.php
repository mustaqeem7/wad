<?php

require_once "db_connection.php";

require "C:/xampp/htdocs/pro/server/functions.php";

if(isset($_POST['insert_Cat']))
{
    $cat_name = $_POST['cat_title'];

    $insertQuery = "insert into categories (cat_title) 
                    values ('$cat_name')";
    $result = mysqli_query($con,$insertQuery);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Category</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Old+Standard+TT">
    <style>
        * {
            font-family: 'Old Standard TT', serif;
        }
    </style>
</head>
<body>
<div class="container">
    <h1 class="text-center my-4"><i class="fas fa-plus fa-md"></i> <span class="d-none d-sm-inline"> Add New </span> Category </h1>
    <form method="post" action="insert_category.php">
        <form action="insert_category.php" method="post" enctype="multipart/form-data">
            <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-2 d-none d-sm-block">
                    <label for="pro_title" class="float-md-right"> Category :</label>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-10 col-sm-10">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fas fa-file-signature"></i></div>
                        </div>
                        <input type="text" class="form-control" id="cat_title" name="cat_title" placeholder="Enter Category Name" >
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-2"></div>
                <div class="col-xl-4 col-lg-4 col-md-8 col-sm-9">
                    <button type="submit" name="insert_Cat" class="btn btn-primary btn-block"><i class="fa fa-plus"></i> Insert Category </button>
                </div>
            </div>
        </form>
    </form>
</div>
</body>
</html>

