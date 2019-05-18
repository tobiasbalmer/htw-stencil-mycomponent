import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first;
  @Prop() middle;
  @Prop() last;

  connectedCallback() {
    console.log('connected callback');
  }

  componentWillLoad() {
    console.log('compontent will load');
  }

  componentDidLoad() {
    console.log('compontent did load');
  }

  componentWillUpdate() {
    console.log('compontent will update');
  }

  componentDidUpdate() {
    console.log('compontent did update');
  }

  private getText() {
    return `${this.first} ${this.middle} ${this.last}`;
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
