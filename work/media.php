<?php
    // 양방향 암복호화 key
    $password = 'dshare_ai_mvp!@';
    // 256 bit 키를 만들기 위해서 비밀번호를 해시해서 첫 32바이트를 사용합니다.
    $password = substr(hash('sha256', $password, true), 0, 32);
    // Initial Vector(IV)는 128 bit(16 byte)입니다.
    $iv = chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0);
    if ($varMode === 'E') { //암호화
        echo $encrypted = base64_encode(openssl_encrypt($varContent, 'aes-256-cbc', $password, OPENSSL_RAW_DATA, $iv));
    } else if ($varMode === 'D') { //복호화
        echo $decrypted = openssl_decrypt(base64_decode($varContent), 'aes-256-cbc', $password, OPENSSL_RAW_DATA, $iv);
    }
    function encrypt_data($s, $_password, $_iv){
        $encrypted = base64_encode(openssl_encrypt($s, 'aes-256-cbc', $_password, OPENSSL_RAW_DATA, $_iv));
        if ($encrypted == '') {
            throw new Exception('wrong encrypted sdata');
        }
        return $encrypted;
    }
    function decrypt_data($s, $_password, $_iv){
        $decrypted = openssl_decrypt(base64_decode($s), 'aes-256-cbc', $_password, OPENSSL_RAW_DATA, $_iv);
        if ($decrypted == '') {
            throw new Exception('wrong decrypted sdata');
        }
        return $decrypted;
    }
    $keys = Array();
    if (($handle = fopen("media.csv", "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            array_push($keys, $data[0]);
        }
        fclose($handle);
    }
    $sql = "INSERT INTO LectureTemps (curriculum, lecture_id, temp) VALUES ";
    foreach($keys as $key =>$value) {
        $encrypted_key = encrypt_data($value, $password, $iv);
        $decrypted_key = decrypt_data($encrypted_key, $password, $iv);
        $lecture_id = $key + 1;
        $sql .= "('essentiallight', {$lecture_id}, '{$encrypted_key}'),";
    }
    echo substr($sql, 0, -1);
?>