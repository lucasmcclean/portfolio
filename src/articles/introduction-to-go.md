---
title: Introduction to Go
description: A concise intro to Go, covering its design, syntax, concurrency model, standard library, and ecosystem.
slug: introduction-to-go
authors:
  - Lucas McClean
reviewers: []
date: 2025-10-15
updated: 2025-10-15
tags:
  - go
  - golang
  - beginner
  - programming
  - concurrency
readTime: 12
image:
  src: ''
  alt: ''
published: true
layout: article
---

This article is merely meant as a brief introduction that I hope will encourage
you to further research Go and its principles. It is far from exhaustive but
does capture the core ideas of Go and some of the features that I find most
interesting. I will cover Go's: [Design](#gos-design), [Syntax](#gos-syntax),
[Ecosystem](#gos-ecosystem), [Standard Library](#gos-standard-library),
[Concurrency Model](#gos-concurrency-model), and approach to
[Error Handling](#gos-error-handling). At the end of each section I also add
resources that I found useful when I was learning Go.

*The only expectation is that you are familiar with programming basics – though
if you have less experience, I think you will still find most of the article
digestible.*

*Note: examples target Go 1.25*

## Go's Design

Go is a programming language built around the core principles of **simplicity**,
**efficiency**, and **concurrency**. Many programming languages prioritize
expressiveness or control. But Go often makes sacrifices in these areas in
exchange for clarity and predictable performance.

In my experience, simplicity is the greatest indicator of an effective and
maintainable code base. The simpler a project is – both architecturally and
line-by-line – the easier it is for developers to work with it effectively. Go's
design encourages code that is more readable and maintainable, almost by
default.

*Resources*: [Go Proverbs](https://go-proverbs.github.io/),
[Effective Go](https://go.dev/doc/effective_go)

## Go's Syntax

If you're familiar with general programming concepts, then Go shouldn't be too
difficult to pick up. Its syntax is relatively basic, with just a few key
differences from other C-like languages.

```go
package main

import "fmt"

// In Go, types come *after* the variable or function name
var test int

// Capitalized identifiers (functions, variables, types, etc.)
// are *exported* (visible outside of the package)
func Sum(x int, y int) int {
    return x + y
}

func main() {
    // \`range\` can be used to iterate (only as of Go 1.22+)
    for i := range 5 {
        // Using formatted output
        fmt.Printf("%d ", Sum(i, i - 1))
    }

    // Traditional loop syntax also works:
    for i := 0; i < 5; i++ {
        fmt.Printf("%d ", Sum(i, i - 1))
    }

    // Explicit type declaration
    var a bool = true
    // Short variable declaration which infers the type
    b := false

    // No parentheses around conditions
    if a || b {
        fmt.Println("a or b")
    }

    x := 0
    // Infinite loop
    for {
        if x > 10 {
            break
        }
        x++
    }
}
```

The main *syntactic* differences from other languages:

- No semicolons at the ends of lines
- Types *after* identifiers in declarations (`x int`)
- Export via capitalization, rather than a keyword
- No parentheses are present around conditions

Go doesn't have classes or inheritance. Instead, it uses **structs** for
grouping data and **methods** (i.e. functions that operate on types) for
behaviour.

Go's methods look different from methods in many other mainstream languages.
They are defined outside the struct and use a receiver to specify which type
they operate on.

```go
package main

import "fmt"

type Example struct {
    name string         // unexported (private)
    isCool bool
    FavoriteNumber int  // exported (public)
    SomeArray []int
}

// Method with value receiver which receives a *copy* of
// \`Example\`
func (e Example) PrintName() {
    // unexported \`name\` still available inside the method
    fmt.Println(e.name)
}

func (e Example) PrintInfo() {
    fmt.Printf("%d %t\n", e.FavoriteNumber, e.isCool)
}

// Method with pointer receiver which allows modification of
// the original
func (e *Example) MakeCool() {
    e.FavoriteNumber = 42
    e.isCool = true
}

// Go doesn't require constructors, but a common convention
// is to use \`NewType\`
func NewExample(name string) *Example {
    return &Example{
        name:       name,
        isCool:     false,
        FavoriteNumber: 67,
        // Because \`SomeArray\` is omitted, it will default
        // to \`nil\`
    }
}

// The main function runs when a package is executed
func main() {
    ex := NewExample("Wyatt")

    ex.PrintName() // Outputs: Wyatt
    ex.PrintInfo() // Outputs: 67 false

    ex.MakeCool() // Modify through pointer receiver
    ex.PrintInfo() // Outputs: 42 true
}
```

Go automatically handles pointer/value method calls; so you can call both
`ex.PrintName()` and `ex.MakeCool()` the same way, and Go will handle the
reference conversion for you.

*Resources*: [Tour of Go](https://go.dev/tour/welcome/1),
[Go by Example](https://gobyexample.com/)

## Go's Error Handling

I've made this its own section, as I often find a language's approach to error
handling to be highly indicative of its general principles. Go's approach is
'errors as values.'

```go
package main

import (
    "errors"
    "fmt"
)

// Go supports multiple return values
func canFail(x int) (int, error) {
    if x <= 5 {
        return 0, errors.New("x should be greater than 5")
    } else {
        return x, nil
    }
}

func main() {
    value, err := canFail(4)
    if err != nil { // You'll see this check quite often in Go code
        fmt.Printf("Uh oh: %v\n", err)
        return
    }
    fmt.Printf("Success: %d was big enough!\n", value)
}
```

*Resources*: [Working with Errors](https://go.dev/blog/go1.13-errors),
[Error Handling in Go](https://go.dev/blog/error-handling-and-go)

## Go's Ecosystem

The pillars that Go is built on also affect the package system and community. Go
developers tend to avoid dependencies if possible and prefer straightforward
designs. There's a preference for 'obvious' designs, and composition as opposed
to inheritance.

In most Go codebases, you'll find:

- Shallow directory structures
- Minimal abstraction
- Composition over inheritance
- A preference for plain interfaces and simple tooling

To start a new Go project:

```bash
# First, install Go from https://go.dev/doc/install
mkdir my-project
cd my-project
go mod init github.com/your-username/my-project
```

To add a dependency:

```bash
go get github.com/dependency-owner/dependency-name@latest
```

To clean up unused or redundant dependencies:

```bash
go mod tidy
```

And finally, to run your project:

```bash
go run .
```

`go.mod` defines the module path and your direct dependencies and the hashes of
those dependencies are stored in `go.sum`.

Some other tools you may see:

- `gofmt` / `go fmt`: formatting (Go culture strongly relies on auto-formatting)
- `go vet` and `staticcheck`: static analysis
- `go test`: testing
- `go install pkg@version`: install a binary from a module

*Resources*: [Awesome Go](https://awesome-go.com/),
[Go Modules Reference](https://go.dev/ref/mod)

## Go's Concurrency Model

In Go, concurrency is first class: it's built right into the syntax of the
language. The primary tool for concurrency in Go is the **goroutine**.

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func DoSomething(x int, wg *sync.WaitGroup) {
    // \`defer\` performs the action at the end of the function
    defer wg.Done()
	time.Sleep(time.Duration(x) * time.Second)
	fmt.Printf("Waited for %d seconds\n", x)
}

func main() {
    var wg sync.WaitGroup

    for i := range 4 {
        wg.Add(1)
        // Simply put \`go\` in front of a function to run it
        // as a goroutine
        go DoSomething(i, &wg)
    }

    // Wait for all goroutines to finish
    wg.Wait()

    // Both output:
    // Waited for 0 seconds
    // Waited for 1 seconds
    // Waited for 2 seconds
    // Waited for 3 seconds
}
```

The other core concurrency tool is the **channel**. Channels are used for
communicating between goroutines, and they come with some of their own syntax.

```go
package main

import (
    "fmt"
    "time"
)

func DoWork(id string, delay int, ch chan string) {
    time.Sleep(time.Duration(delay) * time.Second)
    // Put this message into the provided channel
    ch <- fmt.Sprintf("%s finished after %d seconds", id, delay)
}

func main() {
    // \`make\` is used to create channels
    ch1 := make(chan string)
    ch2 := make(chan string)

    // Goroutine 1 will finish first and 2 will finish around
    // three seconds after
    go DoWork("Goroutine 1", 2, ch1)
    go DoWork("Goroutine 2", 5, ch2)

    for range 2 {
        // \`select\` matches on whichever channel is ready
        select {
        // \`<-\` used to receive value from channel
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        }
    }

    // Outputs:
    // Goroutine 1 finished after 2 seconds
    // Goroutine 2 finished after 5 seconds

    // Capacity is specified as last argument to \`make\`
    buffered := make(chan int, 2)
    buffered <- 10
    buffered <- 20
    close(buffered) // closing signals no more values will be sent

    // 'range' can be used to receive values until the channel closes
    for val := range buffered {
        fmt.Printf("Buffered value: %d\n", val)
    }

    // Outptuts:
    // Buffered value: 10
    // Buffered value: 20
}
```

*Resources*: [Go 101](https://go101.org/article/channel.html),
[Go Concurrency Patterns (video)](https://www.youtube.com/watch?v=f6kdp27TYZs),
[The Go Memory Model](https://go.dev/ref/mem)

## Go's Standard Library

Given the Go community's general opposition to unnecessary dependencies, Go's
standard library is quite comprehensive – particularly in the areas of I/O and
networking. It is very often not necessary to look outside the standard library.
Before adding a dependency, always check
[Go's Standard Library](https://pkg.go.dev/std) and see if it provides what you
need.

Some of the big packages:

- `net`: TCP, UDP, HTTP, DNS, Unix sockets, and more (including `net/http`).
- `io` / `os`: file I/O, environment, `io.Reader`/`io.Writer` patterns.
- `encoding`: JSON, XML, gob, base64, etc.
- `crypto`: common cryptographic tools.
- `testing`: unit tests, benchmarks, and examples.

Long story short: if you need it, Go often has a solid foundation in the
standard library.

## Further Resources

There's still a lot I didn't cover, and much left to explore. But I hope that
what I *did* show impressed you enough to continue looking into it. Go is one of
my favourite programming languages; I find the trade-offs it makes appealing,
and I love how simple it is to pick up.

**[Tour of Go](https://go.dev/tour/)** is a hands-on tour of the syntax and
standard library of Go. It walks you through all of its critical components with
a built-in editor.

**[Effective Go](https://go.dev/doc/effective_go)** provides idioms for common
patterns. This was probably the resource I found **most useful** in my journey
learning more advanced Go.

**[pkg.go.dev/std](https://pkg.go.dev/std)** is the standard library
documentation.

**[Go Blog](https://go.dev/blog/)** covers particular topics. Some topics I
didn't mention or only briefly mentioned, such as generics, channels,
concurrency, and advanced error handling, are also worth exploring on the Go
Blog.

If you have any questions or enjoyed the article, feel free to reach out! You
can find me on [LinkedIn](https://www.linkedin.com/in/lucasmcclean).
