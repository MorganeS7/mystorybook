<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>My Storybook</title>
		<link rel="stylesheet" type="text/css" href="styles/stylesheet.css">
		<link rel="icon" type="image/png" href="images/open-book.png">
	</head>
	<body>
        <div class="book bookLeft bookLeft--undisplayed">
            <div class="content text cinderellaContent hidden">
                <?php include 'views/cinderella1.php'; ?>
            </div>
            <div class="content sleepingbeautyContent hidden">
                <?php include 'views/sleepingbeauty1.php'; ?>
            </div>
            <div class="content bluebeardContent hidden">
                <?php include 'views/bluebeard1.php'; ?>
            </div>
            <div class="content pussinbootsContent hidden">
                <?php include 'views/pussinboots1.php'; ?>
            </div>
        </div>
        <div class="book bookRight bookRight cover">
            <div class="content svg homeContent visible">
                <?php include 'views/cover.php'; ?>
            </div>
            <div class="content text cinderellaContent hidden">
                <?php include 'views/cinderella2.php'; ?>
            </div>
            <div class="content sleepingbeautyContent hidden">
                <?php include 'views/sleepingbeauty2.php'; ?>
            </div>
            <div class="content bluebeardContent hidden album">
                <?php include 'views/bluebeard2.php'; ?>
            </div>
            <div class="content pussinbootsContent hidden">
                <?php include 'views/pussinboots2.php'; ?>
            </div>
            <nav>
				<ul>
					<li id="home" class="link left invisible"><i class="fas fa-home"></i></li>
					<li id="cinderella" class="link right"><?php include 'images/icons/high-heel.svg'; ?></li>
                    <li id="sleepingbeauty" class="link right"><?php include 'images/icons/rose.svg'; ?></li>
					<li id="bluebeard" class="link right"><?php include 'images/icons/beard.svg'; ?></li>
					<li id="pussinboots" class="link right"><?php include 'images/icons/boot.svg'; ?></li>
				</ul>
			</nav>
        </div>
        <div class="loading__overlay">
            <div class="loading__logo"><?php include 'views/loading.php'; ?></div>
        </div>
    <!--<script src="scripts/animation.js" type="text/javascript"></script>
    <script src="scripts/changeLink.js" type="text/javascript"></script> 
    <script src="scripts/hideShowContent.js" type="text/javascript"></script>    
    <script src="scripts/createTurnPage.js" type="text/javascript"></script>
    <script src="scripts/globalTurningPage.js" type="text/javascript"></script>
	<script src="scripts/myscripts.js" type="text/javascript"></script>-->
    <script src="dist/all.js" type="text/javascript"></script>
	<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
	</body>
</html>
