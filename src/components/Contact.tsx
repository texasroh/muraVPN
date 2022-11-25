import qrImg from "../images/openchat_qr.jpg";

const Contact = () => {
  return (
    <section className="container my-8 mx-auto px-8">
      <h2 className="my-4 text-center text-5xl font-medium text-gray-500">
        Request VPN
      </h2>
      <ol className="list-decimal pl-4">
        <li>
          <p>Please open a new chat using link below</p>
          <a href="https://open.kakao.com/o/sCWvqn5d" target={"_blank"}>
            https://open.kakao.com/o/sCWvqn5d
          </a>
          <div className="flex items-center">
            <div className="w-full border-t border-gray-500"></div>
            <span className="px-4 text-sm font-bold text-gray-400">Or</span>
            <div className="w-full border-t border-gray-500"></div>
          </div>
          <p>using QR code below</p>
          <img src={qrImg} />
        </li>
        <li>And ask me to make a vpn account.</li>
      </ol>
    </section>
  );
};

export default Contact;
