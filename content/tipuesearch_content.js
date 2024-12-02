var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323247 \n 個人網站: https://mdecp2024.github.io/hw-41323247/ \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7-1', 'text': '\n \n', 'tags': '', 'url': 'w7-1.html'}, {'title': 'w8-1', 'text': '\n \n', 'tags': '', 'url': 'w8-1.html'}, {'title': 'w10', 'text': '題目一 \n 請利用 程式一 的原始碼, 分別在自己網站的 Brython 頁面、SciTE 編輯器、命令提示字元視窗、Jupyter Lab 以及 Codespaces 環境中執行, 所完成的操作影片, 請以"國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目一: 學號" 作為標題, 並在影片說明欄位中簡述此一影片的操作概要與心得, 完成後請將影片上傳至個人 Youtube 帳號下, 並嵌入個人網站中的 "w10" 頁面中. \n \n \n 題目二 \n 請問 Python 程式中有關變數的命名, 除了必須以"_", 以及英文大小寫字母開頭之外, 還有甚麼需要特別注意的地方? 與所謂的"關鍵字"有關係嗎? 請實際舉例, 針對 Python 程式命名的規則編寫程式, 並採上一題的五種程式執行方法, 展示正確變數命名與違反變數命名時, 所顯示的錯誤訊息回應. 影片命名及嵌入網頁要求與題目一相同, 但必須使用"題目二"標示. \n 變數命名規則 1.開頭字元：變數名稱必須以字母（a-z, A-Z）或底線（_）開頭。 2.後續字元：可以包含字母、數字（0-9）或底線（_）。 3.區分大小寫：myVar 與 myvar 是兩個不同的變數名稱。 4.不允許的字元：變數名稱中不能包含空格、特殊符號（如 @, !, #, $, % 等）。 5.不能使用 Python 關鍵字：如 def, class, if, else, while, for, True, False 等。關鍵字是 Python 保留用來執行特殊功能的詞語，不能作為變數名稱。  \n 題目三 \n \n http://mde.tw/cp2024/content/Problem_set.html 中有利用 Python 程式解決物理與微積分的範例流程, 請根據過程中所得到的 Python 程式, 利用題目一中的五種方法執行後, 在影片說明欄位及個人 w10 頁面中說明解題流程與心得, 影片命名及嵌入網頁要求與題目一相同, 但必須使用"題目三"標示. \n \n # 已知條件\nv0_kmh = 310                # 初速度 (公里/小時)\nv0_ms = v0_kmh * (1000 / 3600)  # 轉換成公尺/秒\nvf = 0                      # 最終速度 (公尺/秒)\nd = 1000                    # 跑道長度 (公尺)\n\n# 運用運動方程式重新計算加速度\na = (vf**2 - v0_ms**2) / (2 * d)\n\n# 輸出結果\nprint(f"飛機需要的恆定加速度為 {a:.2f} m/s^2")\n \n \n \n import math\n\n# 初始條件\ninitial_bacteria = 100\ntarget_population = 50000\n\n# 計算達到 50,000 個細菌所需的時間 (小時)\ntime_hours = 3 * math.log2(target_population / initial_bacteria)\n\n# 輸出結果\nprint(f"細菌數量達到 50,000 需要的時間約為 {time_hours:.2f} 小時")\n \n \n \n 老實說最後一題沒有chatgpt我根本做不出來，但我會看程式裡在寫甚麼，雖然有很多都不懂，不過我會持續學習，讓自己的python和英文都能變好 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '課堂作業程式 \n 課堂作業程式2 \n 1. 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 題目一 \n \n \n 2.已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 網頁上的方格與塗色 \n 題目二 \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '第一題 ， 第二題 ， 第三題 \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w7-2', 'text': "我今天做金字塔 \n n = 50 # 總共的行數   for i in range(n): # 對於每一行  # 印出空格  print(' ' * (n - i - 1), end='') # 在每行前面印出空格  # 印出星號  print('*' * (2 * i + 1)) # 每行印出 2*i + 1 個星號 \n *  ***  *****  *******  *********  ***********  *************  ***************  *****************  *******************  *********************  ***********************  *************************  ***************************  *****************************  *******************************  *********************************  ***********************************  *************************************  ***************************************  *****************************************  *******************************************  *********************************************  ***********************************************  *************************************************  ***************************************************  *****************************************************  *******************************************************  *********************************************************  ***********************************************************  *************************************************************  ***************************************************************  *****************************************************************  *******************************************************************  *********************************************************************  ***********************************************************************  *************************************************************************  ***************************************************************************  *****************************************************************************  *******************************************************************************  *********************************************************************************  ***********************************************************************************  *************************************************************************************  ***************************************************************************************  *****************************************************************************************  *******************************************************************************************  *********************************************************************************************  ***********************************************************************************************  ************************************************************************************************* ************************************************************************************************* \n", 'tags': '', 'url': 'w7-2.html'}, {'title': 'w8-2', 'text': '今天做了以下步驟 \n \n 下載\xa0 python_2025_lite.7z \xa0(可攜程式環境) \n 下載 \xa0 zmq_remote_api_ex_cube_triangle.7z \xa0(利用 Python 控制模擬場景中的物件) \n 進入可攜程式環境中 data/CoppeliaSim 目錄, 開啟 coppeliaSim.exe (機電整合模擬程式, \xa0 原始碼 ) \n 啟動可攜程式環境, 雙點擊 start_ipv6.bat, 系統會啟動四個命令列, 兩個 SciTE 編輯器 \n 執行場景控制程式前, 先處理操作系統的防火牆, 將下列指令存為 .bat 檔案後, 以管理員身分執行, 以便開啟 23000-23050 埠號進出: \n netsh advfirewall firewall add rule name="allow_23000-23050" dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050 \n 開啟 CoppeliaSim 中的視覺串流伺服器: Modules - Connectivity - Visualization stream \n 利用 SciTE 開啟\xa0put_cubes_into_scene_1.py, 利用 Tools - Go 執行操控程式 \n 使用者可以透過瀏覽器, 以模擬場景所在電腦的 IP, 且埠號為 23020 觀看模擬場景 \n \n \n', 'tags': '', 'url': 'w8-2.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};