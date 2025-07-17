<?php
require 'vendor/autoload.php';

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\Writer\PngWriter;

$qr = Builder::create()
    ->writer(new PngWriter())
    ->data('https://spatainha.vn/landing') // URL của bạn
    ->encoding(new Encoding('UTF-8'))
    ->size(300)
    ->margin(10)
    ->build();

header('Content-Type: '.$qr->getMimeType());
echo $qr->getString();
