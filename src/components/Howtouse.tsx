import { forwardRef } from "react";

const Howtouse = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="container my-8 mx-auto px-8" ref={ref}>
      <h2 className="my-4 text-center text-5xl font-medium text-gray-500">
        How to use
      </h2>
      <ol className="list-outside list-decimal pl-4">
        <li>Request VPN account</li>
        <li>You will get .ovpn and ta.key files from me</li>
        <li>
          Install OpenVPN connect client
          <ul className="list-outside list-disc pl-4">
            <li>
              Windows:{" "}
              <a
                href="https://openvpn.net/client-connect-vpn-for-windows/"
                target={"_blank"}
              >
                https://openvpn.net/client-connect-vpn-for-windows/
              </a>
            </li>
            <li>
              Mac OS:{" "}
              <a
                href="https://openvpn.net/client-connect-vpn-for-mac-os/"
                target={"_blank"}
              >
                https://openvpn.net/client-connect-vpn-for-mac-os/
              </a>
            </li>
            <li>Android / IOS: Install "OpenVPN Connect" from App store</li>
          </ul>
        </li>
        <li>Import files in the program/App</li>
        <li>Enjoy the VPN</li>
      </ol>
    </section>
  );
});

export default Howtouse;
