	<!DOCTYPE html>
	<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		ようこそ、あなたの名前は<?php echo $_REQUEST['name']; ?>です！
		ようこそ、あなたの年齢は<?php echo $_REQUEST['age']; ?>です！
		ようこそ、あなたの性別は<?php echo $_REQUEST['gender']; ?>です！
		<?php
			$total = $_REQUEST['p1'] + $_REQUEST['p2'];
		?>
		計算結果は<?php echo $total; ?>
	</body>
	</html>