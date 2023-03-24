function checkPassword() {
  const password = document.getElementById('password').value;
  if (password === '0') {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.blog-content').style.display = 'block';
    var script = document.createElement("script");
    script.setAttribute("id", "cid0020000340534915458");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("async", "");
    script.setAttribute("src", "//st.chatango.com/js/gz/emb.js");
    script.setAttribute("style", "width: 800px;height: 1000px;");
    script.textContent = '{"handle":"chatdatwy","arch":"js","styles":{"a":"33ff33","b":100,"c":"000000","d":"000000","k":"33ff33","l":"33ff33","m":"33ff33","p":"10","q":"33ff33","r":100,"pos":"br","cv":1,"cvfntw":"bold","cvbg":"33ff33","cvfg":"000000","cvw":90,"cvh":40}}';
    document.getElementById("welcome-message").innerText = "Tôi rất vui khi đón chào bạn đến với blog của tôi! Đây là nơi tôi chia sẻ những suy nghĩ, trải nghiệm và kiến thức của mình về nhiều chủ đề khác nhau. Tôi hy vọng bài viết của tôi sẽ giúp ích cho bạn trong bài thi hôm nay.";
    alert('Pass Chuẩn rồi! mời sử dụng');
    document.head.appendChild(script);
  } else {
    alert('pass sai rồi bạn ơi');
  }
}
