## Utils Function

Develop by Lam Nguyen [My github](https://github.com/thuyetlamm)


A comprehensive collection of basic utility functions including `isEmpty`, `get`, `merge`, `deepClone`, and more. This library aims to simplify common operations in JavaScript/TypeScript applications.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
    - [isEmpty](#isempty)
    - [get](#get)
    - [checkTypes](#checkTypes)
    - [compare](#compare)
    - [merge](#merge)
    - [deepClone](#deepclone)
- [Detailed Function Descriptions](#detailed-function-descriptions)
    - [isEmpty](#isempty)
    - [get](#get)
    - [checkTypes](#checkTypes)
    - [compare](#compare)
    - [merge](#merge)
    - [deepClone](#deepclone)
- [License](#license)

## Usage

How to use Show Component
```typescript jsx
import { Show } from "utility-kits";
          
const Example = ({}: IndexProps) => {
  const [count ,setCount] = React.useState(0);

  return (
          <Show>
            <Show.When isTrue={count > 2}>
              Count is greater than 1
            </Show.When>
            <Show.When isTrue={count > 0}>
              Count is greater than 0
            </Show.When>
            <Show.Else>
              Count is equal to 0
            </Show.Else>
          </Show>
  )
}
```
How to use Each Component

```typescript jsx
import { Each } from "utility-kits"
interface Todo {
  id : number
  title : string
}
const Parent = () => {
  const todos :Todo[] = [
      {id :1 , title :"Todo 1"}, 
      {id : 2 , title : "Todo 2"}
  ]
  return (
          <Child todos={todos} />
  )
}

const Child = ({ todos } : {todos : readonly Todo[]}) => {
  return (
          <Each list={todos}
                render={(item : Todo, index) => (
                            <li key={item.id}>{item.title}</li>
                        )}
                empty={<div>Empty content</div>}
          />
  )
}
```

## Installation


Install the library using npm:

```bash
npm install loukas-utils
```

Install the library using yarn:

```bash
yarn add loukas-utils