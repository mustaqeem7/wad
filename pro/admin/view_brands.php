<?php
if(!isset($_SESSION['user_email'])){
    header('location: login.php?not_admin=You are not Admin!');
}
?>

<div class="row">
    <div class="col-sm-12">
        <h1>Brands</h1>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $get_brands = "select * from brands";
            $run_brands = mysqli_query($con,$get_brands);
            $count_brands = mysqli_num_rows($run_brands);
            if($count_brands==0){
                echo "<h2> No brands found in selected criteria </h2>";
            }
            else {
                $i = 0;
                while ($row_brands = mysqli_fetch_array($run_brands)) {
                    $id = $row_brands['brand_id'];
                    $brands = $row_brands['brand_title'];
                    ?>
                    <tr>
                        <td><?php echo $id; ?></td>
                        <td><?php echo $brands; ?></td>
                        <td><a href="index.php?edit_brands=<?php echo $id?>" class="btn btn-primary">
                                <i class="fa fa-edit"></i> Edit
                            </a>
                            <a href="index.php?del_brands=<?php echo $id?>" class="btn btn-danger">
                                <i class="fa fa-trash-alt"></i> Delete
                            </a>
                        </td>
                    </tr>
                    <?php
                }
            }
            ?>
            </tbody>
        </table>
    </div>
</div>