# If-only

 A tiny react component that only renders children if a condition if met.


## Installation

Install it using yarn:

```bash
$ yarn add if-only
```


## Usage


### Simple usage

```javascript
const Component = () => (
  <div>
    // ...
    <If cond={someCondition}>
      // will render if someCondition is true
    </If>
  </div>
);
```


### Advanced usage

If there's only one child, then it's going to render that child, but if there's more than one child, then, it's going to wrap them with an external component. That external component depends on the following props.


#### Manually specifying the external component

This takes precedence over any other prop.

```javascript
const Component = () => (
  <div>
    // ...
    <If cond={someCondition} component={MyExternalComponent}>
      // will render if someCondition is true wrapping it with <MyExternalComponent>
    </If>
  </div>
);
```

#### Using a default external component

If `inline` is specified, it will wrap the children with a `span` tag. Otherwise, it will just use a `div` tag.

```javascript
const Component = () => (
  <div>
    // ...
    <If cond={someCondition} inline>
      // Will render if someCondition is true wrapping it with a <span>
      <div />
      <div />
    </If>
  </div>
);
```

#### Specifying style and className for external component

If a external component is to be rendered, the `className` and `style` props can be specified on the `If` component and
it will pass them down to the external component.

```javascript
const Component = () => (
  <div>
    // ...
    <If cond={someCondition} className="CustomName">
      // Will render if someCondition is true. External <div> will have className="CustomName"
    </If>
  </div>
);
```


## License

MIT. See [LICENSE](LICENSE) for detail.
