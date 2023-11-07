import { ForDevs } from "../pages/dp/styles";

export function DevsUseOnly() {
  return (
    <ForDevs>
      <label htmlFor="dev_tune" className="ball">
        DEVs
      </label>
      <input type="checkbox" name="dev_tune" id="dev_tune" />
      <div id="content">
        <h1>Project Files</h1>
        <a
          target={"_blank"}
          href="https://www.figma.com/file/Ky2Tsv37NUttU86KeRvH7W/Website-Brandde?node-id=0%3A1&t=nJzDNwOXqaBS8Dg6-1"
        >
          Figma Web Design
        </a>
        <a
          target={"_blank"}
          href="https://drive.google.com/drive/folders/1WITJHXNKzDjciScAf3ycu_gUFm6wzEvX?usp=sharing"
        >
          DRIVE
        </a>
        <a
          target={"_blank"}
          href="https://www.figma.com/file/cK5hHRNMWWdjuzcvh8P2Yf/Brandde?node-id=0%3A1&t=PNu8OQqnYR3AzcsB-1"
        >
          Road Map
        </a>
      </div>
    </ForDevs>
  );
}
