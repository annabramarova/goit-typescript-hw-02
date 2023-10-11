/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentProps {
  title: string;
}

class Component <T> {
  constructor (public props:T) {
  }
}

class Page extends Component<ComponentProps> {
  pageInfo () : void {
    console.log(this.props.title);
  }
}

const pageProps: ComponentProps = { title: "Моя сторінка" };
const page = new Page(pageProps);
page.pageInfo();

export {};