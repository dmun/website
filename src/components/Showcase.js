import React from "react";
import ShowcaseCategory from "./ShowcaseCategory";

class Showcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: 0,
      categories: [
        "Social media tool",
        "Maven plugin",
        "Linux configuration",
        "Personal website",
      ],
    };
  }

  handleClick(i) {
    this.setState({
      currentCategory: i,
    });
    console.log(i);
  }

  renderCategory(i) {
    return (
      <ShowcaseCategory
        name={this.state.categories[i]}
        onClick={() => this.handleClick(i)}
        className={this.state.currentCategory === i ? "text-white" : ""}
      />
    );
  }

  render() {
    const currentCategory = this.state.currentCategory;
    let showcase;
    switch (currentCategory) {
      case 0:
        showcase = (
          <div>
            <h1 className="text-2xl font-bold mb-2 text-white">
              {this.state.categories[currentCategory]}
            </h1>
            <p>
              During my software developemnt program, I have created an <span className='text-white font-medium'>Angular/Spring</span> web app with a team of five students.
              The goal of the app is to be able to publish posts to multiple
              social media platforms at the same time, such as LinkedIn, Twitter or Facebook. 
            </p>
          </div>
        );
        break;
      case 1:
        showcase = (
          <div>
            <h1 className="text-2xl font-bold mb-2 text-white">
              {this.state.categories[currentCategory]}
            </h1>
            <p>
              Created a <span className='text-white font-medium'>Java Maven</span> plugin with a team of four students. The customer wanted a way to keep his documentation files updated with the classes used in a Maven project.<br></br>
              We have built a plugin that looks for classes inside the documentation and checks if the mentioned classes exist. Invalid classes will be logged during the Maven build process.
            </p>
          </div>
        );
        break;
      case 2:
        showcase = (
          <div>
            <h1 className="text-2xl font-bold mb-2 text-white">
              {this.state.categories[currentCategory]}
            </h1>
            <p>
              While this is not a full-fledged product, I have spent a lot of
              time configuring my <span className='text-white font-medium'>Linux</span> system and published it on <a className='text-rose-400 hover:text-white transition-colors' href='https://www.github.com/dmun/'>GitHub</a>.
              Included are scripts made in Bash or Lua to optimize my workflow.
            </p>
          </div>
        );
        break;
      case 3:
        showcase = (
          <div>
            <h1 className="text-2xl font-bold mb-2 text-white">
              {this.state.categories[currentCategory]}
            </h1>
            <p>
              To gain a little bit of experience with <span className='text-white font-medium'>React</span> and <span className='text-white font-medium'>TailwindCSS</span>, I have created this website to showcase my abilities. The website was created within multiple coding sessions. I have learned about a lot of things that are open to improvement.
            </p>
          </div>
        );
        break;
    }

    return (
      <div className="flex w-full flex-col sm:flex-row">
        <ul className="flex-none text-rose-400 flex flex-col mr-10 mb-10 place-items-start sm:place-items-end">
          {this.renderCategory(0)}
          {this.renderCategory(1)}
          {this.renderCategory(2)}
          {this.renderCategory(3)}
        </ul>
        <div className="flex-shrink text-rose-200">{showcase}</div>
      </div>
    );
  }
}

export default Showcase;
