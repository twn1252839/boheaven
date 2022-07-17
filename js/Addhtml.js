// page頁面 上方
function PageHeader() {
  document.writeln(
    "<!-- 電腦板 header ------------------------------------------------------------------------>"
  );
  document.writeln("    <!-- login ------------------------------------>");
  document.writeln(
    "    <div class='container-fluid d-none d-md-block p-0 bgc-header-color'>"
  );
  document.writeln("        <div class='container'>");
  document.writeln("            <div class='row py-2'>");
  document.writeln("                <div class='col-12 text-right mr-5'>");
  document.writeln("                    <!-- 帳號 -->");
  document.writeln(
    "                    <input type='text' class='px-2 input-style' placeholder='用戶名(ID)' onfocus='this.placeholder = '''"
  );
  document.writeln(
    "                        onblur='this.placeholder = '用戶名(ID)'' />"
  );
  document.writeln("                    <!-- 密碼 -->");
  document.writeln(
    "                    <input type='password' class='px-2 input-style' placeholder='密碼' onfocus='this.placeholder = '''"
  );
  document.writeln(
    "                        onblur='this.placeholder = '密碼'' />"
  );
  document.writeln("                    <!-- 登入 -->");
  document.writeln(
    "                    <a href='../page/indexLogin.html'><input class='btn py-0 ml-2 input-size font-weight-bold'"
  );
  document.writeln(
    "                            style='background-color: #EFEEE0;' type='submit' value='登入'></a>"
  );
  document.writeln(
    "                    <a href='../header page/Signup.html' target='_black'><input"
  );
  document.writeln(
    "                            class='btn py-0 ml-2 input-size font-weight-bold' style='background-color: #EEC96B;'"
  );
  document.writeln(
    "                            type='button' value='註冊'></a>"
  );
  document.writeln("                    <span class='pl-2'>");
  document.writeln(
    "                        <a class='text-dark mx-1 font-weight-bold lp05' href='../header page/Activity.html'>活動花絮</a>"
  );
  document.writeln(
    "                        <a class='text-dark mx-1 font-weight-bold lp05'"
  );
  document.writeln(
    "                            href='../header page/1AboutUs.html'>關於我們</a>"
  );
  document.writeln(
    "                        <a class='text-dark mx-1 font-weight-bold lp05' href='../blog/AllBlog.html'>媒體中心</a>"
  );
  document.writeln("                    </span>");
  document.writeln("                </div>");
  document.writeln("            </div>");
  document.writeln("        </div>");
  document.writeln("    </div>");
  document.writeln("");
  document.writeln(
    "    <!-- LG Navigation Bars ------------------------------------>"
  );
  document.writeln(
    "    <div class='container-fluid d-none d-lg-block p-0 bgc1 bgc-flex'>"
  );
  document.writeln("        <div class='container'>");
  document.writeln("            <div class='row' style='align-items:center;'>");
  document.writeln("                <div class='col-3 centerCenter'>");
  document.writeln(
    "                    <a class='' href='../index.html'><img class='img-fluid' src='../img/桌機index_img/logo.png'></a>"
  );
  document.writeln("                </div>");
  document.writeln("                <div class='col-9'>");
  document.writeln("                    <div class='row mx-auto'>");
  document.writeln(
    "                        <a class='col py-2 centerCenter listHove' href='../page/LiveCasino.html'>"
  );
  document.writeln(
    "                            <img class='img-fluid' src='../img/桌機index_img/list/list1.png' alt=''>"
  );
  document.writeln("                        </a>");
  document.writeln(
    "                        <a class='col py-2 centerCenter listHove' href='../page/Sport.html'>"
  );
  document.writeln(
    "                            <img class='img-fluid' src='../img/桌機index_img/list/list2.png' alt=''>"
  );
  document.writeln("                        </a>");
  document.writeln(
    "                        <a class='col py-2 centerCenter listHove' href='../page/Bingo.html'>"
  );
  document.writeln(
    "                            <img class='img-fluid' src='../img/桌機index_img/list/list3.png' alt=''>"
  );
  document.writeln("                        </a>");
  document.writeln(
    "                        <a class='col py-2 centerCenter listHove' href='../page/Chess.html'>"
  );
  document.writeln(
    "                            <img class='img-fluid' src='../img/桌機index_img/list/list4.png' alt=''></a>"
  );
  document.writeln(
    "                        <a class='col py-2 centerCenter listHove' href='../page/Slot.html'>"
  );
  document.writeln(
    "                            <img class='img-fluid' src='../img/桌機index_img/list/list5.png' alt=''>"
  );
  document.writeln("                        </a>");
  document.writeln(
    "                        <a class='col py-2 centerCenter listHove' href='../page/Fish.html'>"
  );
  document.writeln(
    "                            <img class='img-fluid' src='../img/桌機index_img/list/list6.png' alt=''>"
  );
  document.writeln("                        </a>");
  document.writeln(
    "                        <a class='col py-2 centerCenter listHove' href='../page/Promotion.html'>"
  );
  document.writeln(
    "                            <img class='img-fluid' src='../img/桌機index_img/list/list7.png' alt=''>"
  );
  document.writeln("                        </a>");
  document.writeln("                    </div>");
  document.writeln("                </div>");
  document.writeln("            </div>");
  document.writeln("        </div>");
  document.writeln("    </div>");
  document.writeln(
    "<!-- 手機板 header ------------------------------------------------------------------------>"
  );
  document.writeln(
    "    <!-- MD Navigation Bars ------------------------------------>"
  );
  document.writeln(
    "    <div class='container-fluid p-0 d-lg-none bgc1 bgc-flex position-fixed fixed-top' id='hi5'>"
  );
  document.writeln("        <div class='container'>");
  document.writeln(
    "            <div class='row py-2' style='align-items: center;'>"
  );
  document.writeln("                <!-- 漢堡圖 -->");
  document.writeln("                <div class='col-2 text-center'>");
  document.writeln("                    <!-- HamburgBtn -->");
  document.writeln(
    "                    <i class='fas fa-bars fa-2x text-light' id='HamburgBtn' data-toggle='modal'"
  );
  document.writeln("                        data-target='#exampleModal0'></i>");
  document.writeln("                    <!-- HamburgBtn modal -->");
  document.writeln(
    "                    <div class='modal' id='exampleModal0'>"
  );
  document.writeln(
    "                        <div id='showMenu p-0' class='modal-dialog'>"
  );
  document.writeln(
    "                            <div class='showMenuList modal-content' style='background-color: #EFEEE0;'>"
  );
  document.writeln(
    "                                <div class='modal-body p-0 m-0'>"
  );
  document.writeln("                                    <!-- logo -->");
  document.writeln(
    "                                    <div class='row m-0 px-5 py-3 bgcFooter bgc-flex'>"
  );
  document.writeln(
    "                                        <div class='col-10 centerCenter'>"
  );
  document.writeln(
    "                                            <img class='img-fluid' src='../img/桌機index_img/logo.png' alt=''>"
  );
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                    <!-- 首頁 -->");
  document.writeln(
    "                                    <div class='row clearfix m-0'>"
  );
  document.writeln(
    "                                        <div class='col-12 px-3 py-2 hamburg-border-bottom w-100'>"
  );
  document.writeln(
    "                                            <a class='' href='../index.html'>"
  );
  document.writeln(
    "                                                <div class='py-2 pl-1 text-decoration-none'>"
  );
  document.writeln(
    "                                                    <img class='img-fluid pl-3' src='../img/手機index_img/H漢堡/0H.png'"
  );
  document.writeln(
    "                                                        alt=''>"
  );
  document.writeln(
    "                                                    <span class='pl-3 text-theme w3-large font-weight-bold'>首頁</span>"
  );
  document.writeln("                                                </div>");
  document.writeln("                                            </a>");
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                    <!-- 優惠活動 -->");
  document.writeln(
    "                                    <div class='row clearfix m-0'>"
  );
  document.writeln(
    "                                        <div class='col-12 px-3 py-2 hamburg-border-bottom w-100'>"
  );
  document.writeln(
    "                                            <a class='' href='../page/Promotion.html'>"
  );
  document.writeln(
    "                                                <div class='py-2 pl-1 text-decoration-none'>"
  );
  document.writeln(
    "                                                    <img class='img-fluid pl-3' src='../img/手機index_img/H漢堡/1H.png'"
  );
  document.writeln(
    "                                                        alt=''>"
  );
  document.writeln(
    "                                                    <span class='pl-3 text-theme w3-large font-weight-bold'>優惠活動</span>"
  );
  document.writeln("                                                </div>");
  document.writeln("                                            </a>");
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                    <!-- 維護時間 -->");
  document.writeln(
    "                                    <div class='row clearfix m-0'>"
  );
  document.writeln(
    "                                        <div class='col-12 px-3 py-2 hamburg-border-bottom w-100'>"
  );
  document.writeln(
    "                                            <a class='' href='../header page/4RepairTime.html'>"
  );
  document.writeln(
    "                                                <div class='py-2 pl-1 text-decoration-none'>"
  );
  document.writeln(
    "                                                    <img class='img-fluid pl-3' src='../img/手機index_img/H漢堡/2H.png'"
  );
  document.writeln(
    "                                                        alt=''>"
  );
  document.writeln(
    "                                                    <span class='pl-3 text-theme w3-large font-weight-bold'>維護時間</span>"
  );
  document.writeln("                                                </div>");
  document.writeln("                                            </a>");
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                    <!-- 常見問題 -->");
  document.writeln(
    "                                    <div class='row clearfix m-0'>"
  );
  document.writeln(
    "                                        <div class='col-12 px-3 py-2 hamburg-border-bottom w-100'>"
  );
  document.writeln(
    "                                            <a class='' href='../header page/3FAQ.html'>"
  );
  document.writeln(
    "                                                <div class='py-2 pl-1 text-decoration-none'>"
  );
  document.writeln(
    "                                                    <img class='img-fluid pl-3' src='../img/手機index_img/H漢堡/3H.png'"
  );
  document.writeln(
    "                                                        alt=''>"
  );
  document.writeln(
    "                                                    <span class='pl-3 text-theme w3-large font-weight-bold'>常見問題</span>"
  );
  document.writeln("                                                </div>");
  document.writeln("                                            </a>");
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                    <!-- 媒體中心 -->");
  document.writeln(
    "                                    <div class='row clearfix m-0'>"
  );
  document.writeln(
    "                                        <div class='col-12 px-3 py-2 hamburg-border-bottom w-100'>"
  );
  document.writeln(
    "                                            <a class='' href='../blog/AllBlog.html'>"
  );
  document.writeln(
    "                                                <div class='py-2 pl-1 text-decoration-none'>"
  );
  document.writeln(
    "                                                    <img class='img-fluid pl-3' src='../img/手機index_img/H漢堡/4H.png'"
  );
  document.writeln(
    "                                                        alt=''>"
  );
  document.writeln(
    "                                                    <span class='pl-3 text-theme w3-large font-weight-bold'>媒體中心</span>"
  );
  document.writeln("                                                </div>");
  document.writeln("                                            </a>");
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                    <!-- APP下載 -->");
  document.writeln(
    "                                    <div class='row clearfix m-0'>"
  );
  document.writeln(
    "                                        <div class='col-12 px-3 py-2 hamburg-border-bottom w-100'>"
  );
  document.writeln(
    "                                            <a class='' href='../header page/2AppDownload.html'>"
  );
  document.writeln(
    "                                                <div class='py-2 pl-1 text-decoration-none'>"
  );
  document.writeln(
    "                                                    <img class='img-fluid pl-3' src='../img/手機index_img/H漢堡/5H.png'"
  );
  document.writeln(
    "                                                        alt=''>"
  );
  document.writeln(
    "                                                    <span class='pl-3 text-theme w3-large font-weight-bold'>APP下載</span>"
  );
  document.writeln("                                                </div>");
  document.writeln("                                            </a>");
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                    <!-- 合營代理 -->");
  document.writeln(
    "                                    <div class='row clearfix m-0'>"
  );
  document.writeln(
    "                                        <div class='col-12 px-3 py-2 hamburg-border-bottom w-100'>"
  );
  document.writeln(
    "                                            <a class='' href='../header page/0Agent.html'>"
  );
  document.writeln(
    "                                                <div class='py-2 pl-1 text-decoration-none'>"
  );
  document.writeln(
    "                                                    <img class='img-fluid pl-3' src='../img/手機index_img/H漢堡/6H.png'"
  );
  document.writeln(
    "                                                        alt=''>"
  );
  document.writeln(
    "                                                    <span class='pl-3 text-theme w3-large font-weight-bold'>合營代理</span>"
  );
  document.writeln("                                                </div>");
  document.writeln("                                            </a>");
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                    <!-- 關於我們 -->");
  document.writeln(
    "                                    <div class='row clearfix m-0'>"
  );
  document.writeln(
    "                                        <div class='col-12 px-3 py-2 hamburg-border-bottom w-100'>"
  );
  document.writeln(
    "                                            <a class='' href='../header page/1AboutUs.html'>"
  );
  document.writeln(
    "                                                <div class='py-2 pl-1 text-decoration-none'>"
  );
  document.writeln(
    "                                                    <img class='img-fluid pl-3' src='../img/手機index_img/H漢堡/7H.png'"
  );
  document.writeln(
    "                                                        alt=''>"
  );
  document.writeln(
    "                                                    <span class='pl-3 text-theme w3-large font-weight-bold'>關於我們</span>"
  );
  document.writeln("                                                </div>");
  document.writeln("                                            </a>");
  document.writeln("                                        </div>");
  document.writeln("                                    </div>");
  document.writeln("                                </div>");
  document.writeln("                            </div>");
  document.writeln("                        </div>");
  document.writeln("                    </div>");
  document.writeln("                </div>");
  document.writeln("                <!-- LOGO -->");
  document.writeln("                <div class='col-4 text-center'>");
  document.writeln(
    "                    <div class='text-center' style='margin-left: -5%;'><a href='../index.html'><img"
  );
  document.writeln(
    "                                src='../img/桌機index_img/logo.png' alt='' class='img-fluid'></a></div>"
  );
  document.writeln("                </div>");
  document.writeln("                <!-- 登入 -->");
  document.writeln(
    "                <div class='col-4 p-0 col-md-4 text-center'>"
  );
  document.writeln(
    "                    <a href='../page/indexLoginPage.html'><input class='btn py-0 px-1 input-size font-weight-bold'"
  );
  document.writeln(
    "                            style='background-color: #EFEEE0;' type='submit' value='登入'></a>"
  );
  document.writeln(
    "                    <a href='../header page/Signup.html' target='_black'><input"
  );
  document.writeln(
    "                            class='btn py-0 px-1 ml-2 input-size font-weight-bold' style='background-color: #EEC96B;'"
  );
  document.writeln(
    "                            type='button' value='註冊'></a>"
  );
  document.writeln("                </div>");
  document.writeln("                <!-- 24HR客服 -->");
  document.writeln("                <div class='col-2 col-md-2 p-2'>");
  document.writeln(
    "                    <div class='text-right mr-3'><img id='hrServiceBtn' src='../img/手機index_img/客服.png' alt=''"
  );
  document.writeln(
    "                            class='img-fluid' data-toggle='modal' data-target='#exampleModal'></div>"
  );
  document.writeln("                </div>");
  document.writeln("                <!-- 24HR客服 Modal -->");
  document.writeln(
    "                <div class='modal fade' id='exampleModal' tabindex='-1' role='dialog'"
  );
  document.writeln(
    "                    aria-labelledby='exampleModalLabel' aria-hidden='true'>"
  );
  document.writeln(
    "                    <div class='modal-dialog' role='document'>"
  );
  document.writeln(
    "                        <div class='modal-content mx-auto w-75'"
  );
  document.writeln(
    "                            style='position: fixed !important;top: 6% !important; left: 10% !important;right: 10% !important;'>"
  );
  document.writeln("                            <!-- 聯繫我們 -->");
  document.writeln(
    "                            <div class='modal-header bg-theme'>"
  );
  document.writeln(
    "                                <p class='modal-title m-auto text-light' id='exampleModalLabel'"
  );
  document.writeln(
    "                                    style='font-size: 1.2rem !important;'>聯繫我們"
  );
  document.writeln("                                </p>");
  document.writeln("                            </div>");
  document.writeln("                            <!-- img -->");
  document.writeln("                            <div class='modal-body p-0'>");
  document.writeln(
    "                                <img src='.../img/手機index_img/客服側邊-02.png' alt='' class='w-100'>"
  );
  document.writeln("                            </div>");
  document.writeln("                            <!-- Close -->");
  document.writeln("                            <div class='w-100 bg-theme'>");
  document.writeln(
    "                                <div class='py-2 text-center text-light' data-dismiss='modal'>Close</div>"
  );
  document.writeln("                            </div>");
  document.writeln("                        </div>");
  document.writeln("                    </div>");
  document.writeln("                </div>");
  document.writeln("            </div>");
  document.writeln("        </div>");
  document.writeln("    </div>");
  document.writeln("");
  document.writeln("    <!-- banner -->");
  document.writeln(
    "    <div class='container-fluid p-0 d-md-none uk-position-relative'>"
  );
  document.writeln("        <!--  -->");
  document.writeln("        <div class='hi5'></div>");
  document.writeln("        <script>");
  document.writeln("            $(document).ready(function () {");
  document.writeln("                let hi5 = $('#hi5').height()");
  document.writeln("                let h = '0'");
  document.writeln("                $('.hi5').height(hi5 - h);");
  document.writeln("            });");
  document.writeln("        </script>");
  document.writeln("        <!--  -->");
  document.writeln(
    "        <div id='carouselExampleControls' class='carousel slide' data-ride='carousel'>"
  );
  document.writeln("            <div class='carousel-inner'>");
  document.writeln("                <div class='carousel-item active'>");
  document.writeln(
    "                    <img src='../img/手機index_img/banner.png' class='d-block w-100' alt='...'>"
  );
  document.writeln("                </div>");
  document.writeln("                <div class='carousel-item'>");
  document.writeln(
    "                    <img src='../img/手機index_img/banner1.jpg' class='d-block w-100' alt='...'>"
  );
  document.writeln("                </div>");
  document.writeln("                <div class='carousel-item'>");
  document.writeln(
    "                    <img src='../img/手機index_img/banner2.webp' class='d-block w-100' alt='...'>"
  );
  document.writeln("                </div>");
  document.writeln("            </div>");
  document.writeln(
    "            <a class='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>"
  );
  document.writeln(
    "                <span class='carousel-control-prev-icon' aria-hidden='true'></span>"
  );
  document.writeln("                <span class='sr-only'>Previous</span>");
  document.writeln("            </a>");
  document.writeln(
    "            <a class='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>"
  );
  document.writeln(
    "                <span class='carousel-control-next-icon' aria-hidden='true'></span>"
  );
  document.writeln("                <span class='sr-only'>Next</span>");
  document.writeln("            </a>");
  document.writeln("        </div>");
  document.writeln("        <!--  -->");
  document.writeln(
    "        <div class='uk-position-absolute uk-position-bottom-center w-100 centerCenter'>"
  );
  document.writeln(
    "            <img src='../img/手機index_img/bg.png' class='img-fluid' alt='' style='margin-top: 3.5rem;'>"
  );
  document.writeln("        </div>");
  document.writeln("    </div>");
}

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
