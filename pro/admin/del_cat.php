<?php
if(!isset($_SESSION['user_email'])){
    header('location: login.php?not_admin=You are not Admin!');
}
if(isset($_GET['del_cat']))
{
    $del_id = $_GET['del_cat'];
    $del = "delete from categories where cat_id='$del_id'";
    echo "$del";
    $run_del = mysqli_query($con,$del);
    if($run_del){
        header('location: index.php?view_categories');
    }
}