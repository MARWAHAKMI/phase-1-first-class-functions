const receivesAFunction = callback => callback()

const returnsANamedFunction = () => {
    const namedFunc = () => "named Function"
    return namedFunc
}

const returnsAnAnonymousFunction = () => () => { }