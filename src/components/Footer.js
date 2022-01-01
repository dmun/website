function Footer(props) {
  return (
    <div>
      <div className="flex flex-row place-content-between text-slate-400">
        <div className="w-1/2">
          <h1 className="text-white text-sm pb-2">Relevant links</h1>
          <ul>
            <li className="hover:text-white transition-colors">
              <a href="https://www.linkedin.com/in/david-van-munster-10324115b/">
                LinkedIn
              </a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="https://www.github.com/dmun/">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h1 className="text-white text-sm pb-2">Email</h1>
          <ul>
            <li className="hover:text-white transition-colors">
              hello@davidvanmunster.com
            </li>
          </ul>
        </div>
      </div>
      <p className="absolute bottom-8 text-sm text-slate-500">
        © 2022 David van Munster
      </p>
    </div>
  );
}

export default Footer;
