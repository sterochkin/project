<?php

$name = $_POST['user_name'];
$phone = $_POST['user_number'];
$message = $_POST['user_question'];
$token = "5636528501:AAEM0CD5cwNi-EWE8glQNNTx3TbsEc7AagQ";
$chat_id ="-1001570044910";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение: ' => $message
);

foreach($arr as $key => $value){
  $txt .= "<b>".$key."</b>".$value."%0A";
};

if ($name == '' && $phone == ''){

}else{
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
}


// if(isset($_SERVER['HTTP_REFERER'])){
//   header("Location: " . $_SERVER['HTTP_REFERER']);    
// } else {
//   echo "An Error";
// }
?>