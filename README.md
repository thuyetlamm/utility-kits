## Utils Function

Develop by Lam Nguyen [My github](https://github.com/thuyetlamm)

A comprehensive collection of basic utility functions
including `isEmpty`, `get`,`set`,`setNew`, `merge`, `deepClone`,`gte`,`lte`, and more. This library aims to simplify
common operations in JavaScript/TypeScript applications.

## Installation

```bash
#NPM
npm install utility-kits

#YARN
yarn add utility-kits
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
    - [isEqual](#isequal)
    - [isEmpty](#isempty)
    - [get](#get)
    - [set](#set)
    - [checkTypes](#checkTypes)
    - [compare](#compare)
    - [merge](#merge)
    - [deepClone](#deepclone)
- [Detailed Function Descriptions](#detailed-function-descriptions)
    - [isEqual](#isequal)
    - [isEmpty](#isempty)
    - [get](#get)
    - [set](#set)
    - [checkTypes](#checkTypes)
    - [compare](#compare)
    - [merge](#merge)
    - [deepClone](#deepclone)
- [License](#license)

## Usage

### `isEqual`

## Overview

The `isEqual` function performs a deep comparison between any values of any type. It checks if the values are deeply
equal by comparing their types and structures. This function supports various data types, including arrays, objects,
primitive values, and functions (including async functions).

```typescript
import { isEqual } from "utility-kits";

const obj1 = {
  number: 42,
  string: 'hello',
  array: [1, 2, 3],
  object: { a: 1 },
  asyncFunc: async () => {
  }
};

const obj2 = {
  number: 42,
  string: 'hello',
  array: [1, 2, 3],
  object: { a: 1 },
  asyncFunc: async () => {
  }
};

const result = isEqual(obj1, obj2);
console.log(result); // true

const obj3 = {
  number: 42,
  string: 'hello',
  array: [1, 2, 3],
  object: { a: 1 },
  asyncFunc: async () => {
    console.log('test');
  }
};

const result2 = isEqual(obj1, obj3);
console.log(result2); // false


const result3 = isEqual([], [], [], [])
console.log(result3); // true

```

[⇧ back to top](#table-of-contents)

### `isEmpty`

```typescript
import { isEmpty } from "utility-kits";
// Avaiable ==> String , Array , Object , Map , Set
//Output isEmpty('') => true
//Output isEmpty({}) => true
//Output isEmpty([]) => true
//Output isEmpty(['Banana']) => false

```

[⇧ back to top](#table-of-contents)

### `get`

```typescript
import { get } from "utility-kits";

interface Order {
  id: number
  product: string
}

interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface Customer {
  id: number;
  name: string;
  address: Address;
  isActive: boolean;
}

const customer: Customer = {
  id: 1,
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Anytown",
    postalCode: "12345"
  },
  isActive: true,
  orders: [
    {
      id: 1,
      product: "Product A"
    },
    {
      id: 1,
      product: "Product A"
    }
  ]
}
get(customer, "name")
// Output "Alice"
get(customer, "address.street")
// Output "123 Main St"
get(customer, "orders.0.product")
// Output "Product A"
get(customer, "age", 0)
// Output 0

```

[⇧ back to top](#table-of-contents)

### `set`

```typescript
import { set } from "utility-kits";

interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface Customer {
  id: number;
  name: string;
  address: Address;
  isActive: boolean;
}

const customer: Customer = {
  id: 1,
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Anytown",
    postalCode: "12345"
  },
}
set(customer, "name", "Tom")
/* Output 
    {
  id: 1,
  name: "Tom",
  address: {
    street: "123 Main St",
    city: "Anytown",
    postalCode: "12345"
  },
}
*/
set(customer, "address.street", "124 Sub St")
/* Output 
   {
  id: 1,
  name: "Tom",
  address: {
    street: "124 Sub St",
    city: "Anytown",
    postalCode: "12345"
  },
}
*/

set(customer, "address.street", () => {
  // Condition value
  return "Address 2"
})
/* Output 
   {
  id: 1,
  name: "Tom",
  address: {
    street: "Address 2",
    city: "Anytown",
    postalCode: "12345"
  },
}
*/
```

[⇧ back to top](#table-of-contents)

### `Show`

**Usage:**

```typescript jsx

import { Show } from "utility-kits";

const Example = () => {
  const [count, setCount] = React.useState(0);

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

[⇧ back to top](#table-of-contents)

### `Each`

**Usage:**

```typescript jsx
import { Each } from "utility-kits"

interface Todo {
  id: number
  title: string
}

const Parent = () => {
  const todos: Todo[] = [
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" }
  ]
  return (
    <Child todos={todos} />
  )
}

const Child = ({ todos }: { todos: readonly Todo[] }) => {
  return (
    <Each
      list={todos}
      render={(item: Todo, index) => (
        <li key={item.id}>{item.title}</li>
      )}
      empty={<div>Empty content</div>}
    />
  )
}
```

