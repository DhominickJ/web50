import "./style.css";

interface Folder {
  name: string;
  lesson: string;
}

async function folderFetch() {
  try {
    // Fetch the current iteration of the json file
    const response = await fetch("/structure.json");
    const folders = await response.json();

    const container = document.getElementById("projects");

    folders.forEach((folder: Folder) => {
      const button = document.createElement("button");
      button.className = "button_layout";
      button.textContent = folder.name;
      button.onclick = (): void => {
        const folderPath: string = `/pages/${folder.name}/${folder.lesson}.html`;
        button.disabled = true;
        window.location.href = folderPath;
      };

      return container?.appendChild(button);
    });
  } catch (error) {
    console.error("Error loading folders: ", error);
  }
}

folderFetch();
