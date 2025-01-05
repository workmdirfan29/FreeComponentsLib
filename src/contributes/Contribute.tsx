import React from "react";
import { FiClipboard } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contribute: React.FC = () => {
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Code copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy text: " + err);
      });
  };

  return (
    <div className="min-h-screen mt-16 text-gray-200 bg-gray-900">
      <h1 className="pt-4 mb-8 text-3xl font-extrabold text-center text-gray-50">
        How to Contribute to an Open-Source UI Library
      </h1>

      <section className="max-w-4xl p-8 mx-auto text-gray-200 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-sky-600">
          Steps to Contribute
        </h2>
        <p className="mb-6 text-lg text-gray-300">
          Contributing to an open-source UI library is a rewarding experience.
          By following these steps, you can help make the library more useful
          for others and also improve your skills as a developer.
        </p>

        <ul className="space-y-6 text-lg text-gray-300">
          <li>
            <strong className="text-blue-400">Fork the Repository:</strong> Go
            to the repository of the UI library and click on the "Fork" button
            in the top-right corner. This will create a copy of the repository
            under your GitHub account.
          </li>
          <li>
            <strong className="text-blue-400">Clone the Repository:</strong>{" "}
            Clone the forked repository to your local machine using the command:
            <div className="flex items-center justify-between p-4 mt-2 bg-gray-700 rounded-md shadow-sm">
              <pre className="text-gray-100">
                git clone https://github.com/your-username/repository-name.git
              </pre>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() =>
                  handleCopyToClipboard(
                    "git clone https://github.com/your-username/repository-name.git"
                  )
                }
              >
                <FiClipboard size={20} />
              </button>
            </div>
          </li>
          <li>
            <strong className="text-blue-400">Create a Branch:</strong> Always
            create a new branch to make your changes. This will keep your
            changes separate from the main codebase. You can create a branch
            with:
            <div className="flex items-center justify-between p-4 mt-2 bg-gray-700 rounded-md shadow-sm">
              <pre className="text-gray-100">git checkout -b new-feature</pre>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() =>
                  handleCopyToClipboard("git checkout -b new-feature")
                }
              >
                <FiClipboard size={20} />
              </button>
            </div>
          </li>
          <li>
            <strong className="text-blue-400">Make Your Changes:</strong> Add
            your feature or bug fix to the library. You can write UI components,
            improve existing ones, or add styles.
          </li>
          <li>
            <strong className="text-blue-400">Test Your Changes:</strong> Ensure
            your code works as expected by running the examples and checking if
            they look and behave correctly.
          </li>
          <li>
            <strong className="text-blue-400">Commit Your Changes:</strong> Once
            you're satisfied with the changes, commit them to your branch:
            <div className="flex items-center justify-between p-4 mt-2 bg-gray-700 rounded-md shadow-sm">
              <pre className="text-gray-100">
                git add . && git commit -m "Added new feature"
              </pre>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() =>
                  handleCopyToClipboard(
                    "git add . && git commit -m 'Added new feature'"
                  )
                }
              >
                <FiClipboard size={20} />
              </button>
            </div>
          </li>
          <li>
            <strong className="text-blue-400">Push Your Changes:</strong> Push
            the changes to your forked repository:
            <div className="flex items-center justify-between p-4 mt-2 bg-gray-700 rounded-md shadow-sm">
              <pre className="text-gray-100">git push origin new-feature</pre>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() =>
                  handleCopyToClipboard("git push origin new-feature")
                }
              >
                <FiClipboard size={20} />
              </button>
            </div>
          </li>
          <li>
            <strong className="text-blue-400">Create a Pull Request:</strong>{" "}
            Open a pull request from your branch to the original repository.
            Provide a description of your changes and why they are useful.
          </li>
        </ul>

        <h2 className="mt-12 mb-6 text-2xl font-semibold text-gray-100">
          How to Integrate This UI Library into Your Project
        </h2>
        <p className="mb-6 text-lg text-gray-300">
          This UI library is designed to be easy to use. The best part is that
          you don't need to install any dependencies! Everything is just a
          simple "copy and paste" solution.
        </p>
        <p className="mb-6 text-lg text-gray-300">
          Follow these steps to integrate the UI library into your project:
        </p>

        <ul className="space-y-6 text-lg text-gray-300">
          <li>
            <strong className="text-blue-400">Copy the CSS:</strong> Go to the
            library's CSS file and copy the entire content. Paste it into your
            project's main stylesheet.
          </li>
          <li>
            <strong className="text-blue-400">
              Copy the JavaScript Components:
            </strong>{" "}
            Copy the necessary component code from the library’s repository or
            documentation page. Paste it directly into your project.
          </li>
          <li>
            <strong className="text-blue-400">
              Use the Components in Your Project:
            </strong>{" "}
            Once the components and styles are copied, simply import and use
            them within your JSX/TSX files like any other React component.
            Example:
            <div className="flex items-center justify-between p-4 mt-2 bg-gray-700 rounded-md shadow-sm">
              <pre className="text-gray-100">
                {`import { Button } from './path-to-copied-component';\nconst App = () => {\n  return <Button label="Click Me" />;\n}\nexport default App;`}
              </pre>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() =>
                  handleCopyToClipboard(
                    `import { Button } from './path-to-copied-component';\nconst App = () => {\n  return <Button label="Click Me" />;\n}\nexport default App;`
                  )
                }
              >
                <FiClipboard size={20} />
              </button>
            </div>
          </li>
        </ul>

        <p className="mt-6 text-lg text-gray-300">
          That's it! No installations, no npm or yarn dependencies required.
          Simply copy and paste, and you'll have the UI components up and
          running.
        </p>

        <h2 className="mt-12 mb-6 text-2xl font-semibold text-sky-600">
          Need Help?
        </h2>
        <p className="text-lg text-gray-300">
          If you have any questions or run into issues, feel free to open an
          issue in the GitHub repository or ask for help in the community.
        </p>

        <div className="mt-8 text-center">
          <button
            className="px-6 py-2.5 text-lg font-semibold text-white rounded-lg bg-zinc-900 hover:bg-neutral-950"
            onClick={() =>
              window.open(
                "https://github.com/workmdirfan29/FreeComponentsLib",
                "_blank"
              )
            }
          >
            Open GitHub
          </button>
        </div>
      </section>

      {/* Add ToastContainer to render toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contribute;
