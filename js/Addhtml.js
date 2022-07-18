// page頁面 上方
function PageHeader() {
  document.writeln('  <!-- 電腦板  ------------------------------------------------------------------------>');
  document.writeln('  <!-- login ------------------------------------>');
  document.writeln("  <div class='container-fluid  d-none d-md-block p-0 bg-theme2'>");
  document.writeln("    <div class=' container-lg'>");
  document.writeln("      <div class='row align-items-center'>");
  document.writeln("        <div class='col-2 px-0 text-center'>");
  document.writeln("          <img src='./img/桌機index_img/logo.png' class='img-fluid p-2' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col-7 px-0 d-inline-flex align-items-center'>");
  document.writeln("          <div class='btn-group align-items-center'>");
  document.writeln("            <div class='btn py-0 px-2 px-lg-3'>");
  document.writeln("              <p class='text-theme font_b border-bottom bd-theme'");
  document.writeln("                style='height: 50px;padding-top: .7rem;border-width: .35rem !important;border-radius: 5%;'>");
  document.writeln('                首頁');
  document.writeln('              </p>');
  document.writeln('            </div>');
  document.writeln("            <div class='btn py-0 px-2 px-lg-3' id='hover1'>");
  document.writeln('              <span>真人</span>');
  document.writeln("              <img src='./img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>");
  document.writeln('            </div>');
  document.writeln("            <div class='btn py-0 px-2 px-lg-3' id='hover2'>");
  document.writeln('              <span>體育</span>');
  document.writeln("              <img src='./img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>");
  document.writeln('            </div>');
  document.writeln("            <div class='btn py-0 px-2 px-lg-3' id='hover3'>");
  document.writeln('              <span>賓果</span>');
  document.writeln("              <img src='./img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>");
  document.writeln('            </div>');
  document.writeln("            <div class='btn py-0 px-2 px-lg-3' id='hover4'>");
  document.writeln('              <span>電子</span>');
  document.writeln("              <img src='./img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>");
  document.writeln('            </div>');
  document.writeln("            <div class='btn py-0 px-2 px-lg-3' id='hover5'>");
  document.writeln('              <span>棋牌</span>');
  document.writeln("              <img src='./img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>");
  document.writeln('            </div>');
  document.writeln("            <div class='btn py-0 px-2 px-lg-3' id='hover6'>");
  document.writeln('              <span>捕魚</span>');
  document.writeln("              <img src='./img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>");
  document.writeln('            </div>');
  document.writeln("            <div class='btn py-0 px-2 px-lg-3' id='hover7'>");
  document.writeln('              <span>優惠</span>');
  document.writeln("              <img src='./img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>");
  document.writeln('            </div>');
  document.writeln('          </div>');
  document.writeln('        </div>');
  document.writeln("        <div class='col-3' id='drw'>");
  document.writeln("          <div class='row align-items-center btn-group'>");
  document.writeln('');
  document.writeln("            <div class='col-7 p-0 pl-1 dropdown-toggle'>");
  document.writeln("              <a href='./page/indexLoginPage.html' class='pr-2'><input");
  document.writeln("                  class='btn rounded py-1 input-size font-weight-bold text-light'");
  document.writeln("                  style='background: linear-gradient(180deg, #57D7FF 0%, #1E50A6 100%);' type='submit' value='登入'></a>");
  document.writeln("              <a href='./header page/Signup.html' target='_black'><input class='btn py-1 input-size font-weight-bold'");
  document.writeln("                  style='background: linear-gradient(180deg, #F8E98E 0%, #F2D06F 100%);' type='button' value='註冊'></a>");
  document.writeln('            </div>');
  document.writeln('          </div>');
  document.writeln('        </div>');
  document.writeln('      </div>');
  document.writeln('    </div>');
  document.writeln('  </div>');
  document.writeln('  <!-- hoveList -->');
  document.writeln("  <div class='container-fluid p-0 '>");
  document.writeln("    <div class='container'>");
  document.writeln("      <div class='row px-5' id='hover1List'>");
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/baccarat/10035.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/baccarat/10036.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/baccarat/10037.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/baccarat/10038.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/baccarat/10039.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/baccarat/10040.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln('      </div>');
  document.writeln("      <div class='row px-5' id='hover2List'>");
  document.writeln("        <div class='col p-3'>");
  document.writeln("          <img src='./img/桌機index_img/list/sport/1.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col p-3'>");
  document.writeln("          <img src='./img/桌機index_img/list/sport/2.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln('      </div>');
  document.writeln("      <div class='row px-5' id='hover3List'>");
  document.writeln("        <div class='col p-3'>");
  document.writeln("          <img src='./img/桌機index_img/list/bingo/1.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col p-3'>");
  document.writeln("          <img src='./img/桌機index_img/list/bingo/2.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln('      </div>');
  document.writeln("      <div class='row px-5' id='hover4List'>");
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/slot/1.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/slot/2.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/slot/3.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/slot/4.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/slot/5.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col'>");
  document.writeln("          <img src='./img/桌機index_img/list/slot/6.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln('      </div>');
  document.writeln("      <div class='row px-5' id='hover5List'>");
  document.writeln("        <div class='col p-3'>");
  document.writeln("          <img src='./img/桌機index_img/list/card/1.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col p-3'>");
  document.writeln("          <img src='./img/桌機index_img/list/card/2.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln('      </div>');
  document.writeln("      <div class='row px-5' id='hover6List'>");
  document.writeln("        <div class='col p-3'>");
  document.writeln("          <img src='./img/桌機index_img/list/fish/1.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln("        <div class='col p-3'>");
  document.writeln("          <img src='./img/桌機index_img/list/fish/2.png' class='' alt=''>");
  document.writeln('        </div>');
  document.writeln('      </div>');
  document.writeln('    </div>');
  document.writeln('  </div>');
  document.writeln('');
  document.writeln('  <!--  uk-position-relative -->');
  document.writeln('  <!--  -->');
  document.writeln("  <div class='container-fluid p-0 m-0 bgc-body-color d-none d-md-block marquee_bg border'>");
  document.writeln("    <div class='container bgc-flex'>");
  document.writeln("      <div class='row p-0 m-0'>");
  document.writeln("        <div class='text-center' style='padding-top: 0.1em;width: 12%;'>");
  document.writeln('          <img');
  document.writeln(
      "            src='data:image/png;base64,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'"
  );
  document.writeln("            alt='...'>");
  document.writeln("          <span class='fsz-08 font-weight-bold pl-1'>最新公告</span>");
  document.writeln('        </div>');
  document.writeln("        <div class='' style='width: 80%;'>");
  document.writeln("          <marquee direction='left' height='30' scrollamount='10' behavior='left' class=' h-100 pt-1'");
  document.writeln("            onmouseover='this.stop()' onmouseout='this.start()'>");
  document.writeln(
      '            【維護公告】 親愛的娛樂城會員您好，【幸運棋牌-維護通知】即刻起進行線路調整緊急維護，維護完成時間待定，造成不便敬請見諒    【存款公告】'
  );
  document.writeln(
      '            開通超商存款後以第一次繳費地點為綁定超商，若後續要更換繳費超商，請先提前告知與客服申請，否則導致造成資金損失風險需自行承擔，若為附近的超商地點繳費提前告知即可    【存款公告】'
  );
  document.writeln(
      '            敬愛的卡利會員您好，卡利娛樂城為防堵詐騙氾濫、保障會員資金安全，在此提醒：信用卡、ATM轉帳、VIP專用帳戶存款等服務，務必使用「本人帳戶」！若使用非本人帳戶存款，將一律扣除處理費用後退還本金，感謝您的配合。    【維護公告】'
  );
  document.writeln('            親愛的會員您好，AV影城將於2020/12/14正式下架，造成不便敬請見諒。    【取款公告】');
  document.writeln(
      '            親愛的卡利會員您好，由於體育注單會因改判賽事等因素，而進行注單重新結算，因此即日起，卡利娛樂城進行出款時，體育相關注單須全數派彩完畢才處理支付款項，若玩家手上有未派彩注單，麻煩您耐心等候，如有相關疑問、歡迎諮詢24H線上客服，謝謝您。'
  );
  document.writeln('          </marquee>');
  document.writeln('        </div>');
  document.writeln('      </div>');
  document.writeln('    </div>');
  document.writeln('  </div>');
  document.writeln('  <!-- banner -->');
  document.writeln("  <div class='container-fluid d-none d-md-block p-0'>");
  document.writeln("    <div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'>");
  document.writeln("      <ol class='carousel-indicators'>");
  document.writeln("        <li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li>");
  document.writeln("        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>");
  document.writeln("        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>");
  document.writeln('      </ol>');
  document.writeln("      <div class='carousel-inner'>");
  document.writeln("        <a href='#' class='carousel-item active'>");
  document.writeln("          <img src='./img/桌機index_img/banner1.png' class='d-block w-100' alt='...'>");
  document.writeln('        </a>');
  document.writeln("        <a href='#' class='carousel-item'>");
  document.writeln("          <img src='./img/桌機index_img/banner2.png' class='d-block w-100' alt='...'>");
  document.writeln('        </a>');
  document.writeln('      </div>');
  document.writeln("      <a class='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>");
  document.writeln("        <span class='carousel-control-prev-icon' aria-hidden='true'></span>");
  document.writeln("        <span class='sr-only'>Previous</span>");
  document.writeln('      </a>');
  document.writeln("      <a class='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>");
  document.writeln("        <span class='carousel-control-next-icon' aria-hidden='true'></span>");
  document.writeln("        <span class='sr-only'>Next</span>");
  document.writeln('      </a>');
  document.writeln('    </div>');
  document.writeln('  </div>');
}

// Banner 上方
function PageHeaderBanner(){}

// PC Footer
function PCFooter() {
  document.writeln(
    "<!-- footer ------------------------------------------------------------------------>"
  );
  document.writeln("        <!-- 電腦版 -->");
  document.writeln(
    "        <div class='container-fluid p-0 m-0 bgc-flex-SA d-none d-md-block'"
  );
  document.writeln(
    "            style='background:url(../img/桌機index_img/footer.png) #000;'>"
  );
  document.writeln("            <div class='container'>");
  document.writeln("    ");
  document.writeln("    ");
  document.writeln(
    "                <div class='row centerCenter py-0 py-md-3'>"
  );
  document.writeln("                    <div class='col-12 col-lg-8'>");
  document.writeln("                        <div class='row'>");
  document.writeln("                            <!-- 遊戲廳 -->");
  document.writeln("                            <div class='col'>");
  document.writeln(
    "                                <p class='w3-large font-weight-bold text-theme'>遊戲廳</p>"
  );
  document.writeln("                                <ul class='pt-2'>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../page/LiveCasino.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>百家樂</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../page/Sport.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>體育博彩</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../page/Bingo.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>賓果遊戲</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../page/Chess.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>棋牌遊戲</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../page/Slot.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>電子遊戲</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../page/Fish.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>捕魚王</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                </ul>");
  document.writeln("                            </div>");
  document.writeln("                            <!-- 服務簡介 -->");
  document.writeln("                            <div class='col'>");
  document.writeln(
    "                                <p class='w3-large font-weight-bold text-theme'>服務簡介</p>"
  );
  document.writeln("                                <ul class='pt-2'>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../header page/3FAQ.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>常見問題</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../header page/0Agent.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>合營代理</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../header page/2AppDownload.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>APP下載</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                </ul>");
  document.writeln("                            </div>");
  document.writeln("                            <!-- 活動花絮 -->");
  document.writeln("                            <div class='col'>");
  document.writeln(
    "                                <p class='w3-large font-weight-bold text-theme'>活動花絮</p>"
  );
  document.writeln("                                <ul class='pt-2'>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../header page/Activity.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>活動花絮</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                </ul>");
  document.writeln("                            </div>");
  document.writeln("                            <!-- 媒體中心 -->");
  document.writeln("                            <div class='col'>");
  document.writeln(
    "                                <p class='w3-large font-weight-bold text-theme'>媒體中心</p>"
  );
  document.writeln("                                <ul class='pt-2'>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../header page/AllBlog.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>媒體中心</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                </ul>");
  document.writeln("                            </div>");
  document.writeln("                            <!-- 關於我們 -->");
  document.writeln("                            <div class='col'>");
  document.writeln(
    "                                <p class='w3-large font-weight-bold text-theme'>關於我們</p>"
  );
  document.writeln("                                <ul class='pt-2'>");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <a href='../header page/1AboutUs.html'>"
  );
  document.writeln(
    "                                            <p class='text-light w3-hover-text-orange'>關於我們</p>"
  );
  document.writeln("                                        </a>");
  document.writeln("                                    </li>");
  document.writeln("                                </ul>");
  document.writeln("                            </div>");
  document.writeln("                            <!-- 聯絡我們 -->");
  document.writeln(
    "                            <div class='flex-grow-1 ml-2'>"
  );
  document.writeln(
    "                                <p class='w3-large font-weight-bold text-theme'>聯絡我們</p>"
  );
  document.writeln("                                <ul class='pt-2'>");
  document.writeln("                                    <!--  -->");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <div class='row m-0'>"
  );
  document.writeln(
    "                                            <div class='col-3 p-0 centerCenter'>"
  );
  document.writeln(
    "                                                <img src='../img/桌機index_img/Aphone.png' class='img-fluid' alt=''>"
  );
  document.writeln("                                            </div>");
  document.writeln(
    "                                            <div class='col-9 p-0'>"
  );
  document.writeln(
    "                                                <span class='text-light'>09xxxxxxxx</span>"
  );
  document.writeln("                                            </div>");
  document.writeln("                                        </div>");
  document.writeln("                                    </li>");
  document.writeln("                                    <!--  -->");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <div class='row m-0'>"
  );
  document.writeln(
    "                                            <div class='col-3 p-0 centerCenter'>"
  );
  document.writeln(
    "                                                <img src='../img/桌機index_img/A網址.png' class='img-fluid' alt=''>"
  );
  document.writeln("                                            </div>");
  document.writeln(
    "                                            <div class='col-9 p-0'>"
  );
  document.writeln(
    "                                                <span class='text-light'>sa360.net</span>"
  );
  document.writeln("                                            </div>");
  document.writeln("                                        </div>");
  document.writeln("                                    </li>");
  document.writeln("                                    <!--  -->");
  document.writeln("                                    <li>");
  document.writeln(
    "                                        <div class='row m-0'>"
  );
  document.writeln(
    "                                            <div class='col-3 p-0 centerCenter'>"
  );
  document.writeln(
    "                                                <img src='../img/桌機index_img/A信箱.png' class='img-fluid' alt=''>"
  );
  document.writeln("                                            </div>");
  document.writeln(
    "                                            <div class='col-9 p-0'>"
  );
  document.writeln(
    "                                                <span class='text-light'>@sa360</span>"
  );
  document.writeln("                                            </div>");
  document.writeln("                                        </div>");
  document.writeln("                                    </li>");
  document.writeln("                                </ul>");
  document.writeln("                            </div>");
  document.writeln("                        </div>");
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='col-12 col-lg-4 my-3 my-lg-0'>"
  );
  document.writeln(
    "                        <p class='w3-xlarge font-weight-bold text-theme'>訂閱電子通訊</p>"
  );
  document.writeln(
    "                        <p class='text-light'>電子郵件</p>"
  );
  document.writeln(
    "                        <input type='text' value='' class='px-2 py-0' placeholder='請輸入email'>"
  );
  document.writeln("                        <div class='py-2'>");
  document.writeln(
    "                            <button class='uk-button px-3 py-0 bg-theme text-light w3-hover-amber' type='button'>訂閱</button>"
  );
  document.writeln("                        </div>");
  document.writeln("                        <div class='py-1'>");
  document.writeln(
    "                            <img class='img-fluid px-1' src='../img/桌機index_img/fb.png' alt=''>"
  );
  document.writeln(
    "                            <img class='img-fluid px-1' src='../img/桌機index_img/ig.png' alt=''>"
  );
  document.writeln(
    "                            <img class='img-fluid px-1' src='../img/桌機index_img/twitter.png' alt=''>"
  );
  document.writeln(
    "                            <img class='img-fluid px-1' src='../img/桌機index_img/yt.png' alt=''>"
  );
  document.writeln("                        </div>");
  document.writeln("                    </div>");
  document.writeln("                </div>");
  document.writeln("            </div>");
  document.writeln("            <blockquote class='blockquote py-3 m-0'>");
  document.writeln(
    "                <footer class='blockquote-footer centerCenter'>Copyright © 2021 SA Gaming. All Rights Reserved.</footer>"
  );
  document.writeln("            </blockquote>");
  document.writeln("        </div>");
}

// MD Footer
function MDFooter() {
  document.writeln("<!-- 手機版 fixed bottom -->");
  document.writeln(
    "                <div id='footerHCopy' class='container-fluid d-md-none p-0 m-0 fixed-bottom bgc-flex-SA'"
  );
  document.writeln(
    "                    style='background:url(../img/桌機index_img/footer.png) #000;'>"
  );
  document.writeln(
    "                    <div class='container m-0 p-0 centerCenter'>"
  );
  document.writeln("                        <div class='row px-0 py-2 m-0'>");
  document.writeln(
    "                            <div class='col centerCenter px-0'>"
  );
  document.writeln("                                <a href='../index.html'>");
  document.writeln(
    "                                    <img src='../img/手機index_img/B1首頁.png' class='img-fluid' alt=''>"
  );
  document.writeln("                                </a>");
  document.writeln("                            </div>");
  document.writeln(
    "                            <div class='col centerCenter px-0'>"
  );
  document.writeln(
    "                                <a href='../page/Promotion.html'>"
  );
  document.writeln(
    "                                    <img src='../img/手機index_img/B2優惠.png' class='img-fluid' alt=''>"
  );
  document.writeln("                                </a>");
  document.writeln("                            </div>");
  document.writeln(
    "                            <div class='col centerCenter px-0'>"
  );
  document.writeln(
    "                                <a href='../page/indexLoginPage.html'>"
  );
  document.writeln(
    "                                    <img src='../img/手機index_img/B3.png' class='img-fluid' alt=''>"
  );
  document.writeln("                                </a>");
  document.writeln("                            </div>");
  document.writeln(
    "                            <div class='col centerCenter px-0'>"
  );
  document.writeln(
    "                                <a href='../header page/Signup.html'>"
  );
  document.writeln(
    "                                    <img src='../img/手機index_img/B4.png' class='img-fluid' alt=''>"
  );
  document.writeln("                                </a>");
  document.writeln("                            </div>");
  document.writeln("                        </div>");
  document.writeln("                    </div>");
  document.writeln("                </div>");
  document.writeln("            ");
  document.writeln("                <!-- 右側中 -->");
  document.writeln(
    "                <div class='uk-position-fixed uk-position-center-right btn-fixed d-none d-md-block' style='width: 5rem; height: auto;margin-top: 50px;'>"
  );
  document.writeln(
    "                    <button class='btn centerCenter rounded-circle'>"
  );
  document.writeln(
    "                        <img src='../img/桌機index_img/Fline.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    </button>");
  document.writeln(
    "                    <button class='btn centerCenter rounded-circle'>"
  );
  document.writeln(
    "                        <img src='../img/桌機index_img/F寄信.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    </button>");
  document.writeln("                </div>");
  document.writeln("            ");
  document.writeln("                <!-- back-to-top -->");
  document.writeln("                <!-- <button id='back-to-top'");
  document.writeln(
    "                    class='btn uk-position-fixed uk-position-bottom-right centerCenter d-none d-md-block rounded-circle btn-fixed'"
  );
  document.writeln(
    "                    style='background-color: #000;height: 2.8em;width: 2.8em;'>"
  );
  document.writeln(
    "                    <i class='fas fa-angle-up w3-xlarge text-light'></i>"
  );
  document.writeln("                </button> -->");
  document.writeln("            ");
  document.writeln("            ");
  document.writeln("                <script>");
  document.writeln("                    $(document).ready(function () {");
  document.writeln(
    "                        let footerHCopy = $('#footerHCopy').height();"
  );
  document.writeln(
    "                        $('.footerHCopy').height(footerHCopy);"
  );
  document.writeln("                    });");
  document.writeln("                </script>");
  document.writeln("            ");
  document.writeln("                <!-- 滾動選軸 -->");
  document.writeln("                <script>");
  document.writeln("                    $(document).ready(function () {");
  document.writeln("                        // 最上方隱藏");
  document.writeln("                        $('#back-to-top').hide();");
  document.writeln("                        // 顯示");
  document.writeln("                        // $(window).scroll(function () {");
  document.writeln(
    "                        //     if ($(window).scrollTop() > 100) {"
  );
  document.writeln(
    "                        //         $('#back-to-top').fadeIn(1000);"
  );
  document.writeln("                        //     } else {");
  document.writeln(
    "                        //         $('#back-to-top').fadeOut(1500);"
  );
  document.writeln("                        //     }");
  document.writeln("                        // });");
  document.writeln("                        // 滾動");
  document.writeln(
    "                        $('#back-to-top').click(function () {"
  );
  document.writeln("                            // 捲動最上面");
  document.writeln(
    "                            $('body,html').animate({ scrollTop: 0 }, 1000);"
  );
  document.writeln("                            // 捲動固定ID");
  document.writeln(
    "                            // $('body,html').animate({ scrollTop: $('#axc').offset().top }, 1000);"
  );
  document.writeln("                            return false;");
  document.writeln("                        });");
  document.writeln("                    });");
  document.writeln("            ");
  document.writeln("                </script>");
}

// MD Blog Footer
function MDBlogFooter() {}

// 登入頁面 上方
function indexLoginHeader() {}

// 登入頁面 Footer
function indexLoginFooter() {}
