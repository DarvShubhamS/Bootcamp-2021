//Import a module containing the constants and method for calculating area of circle, rectangle, cylinder
export function circle(radius) {
    return 3.14 * radius * radius
}

export function rectangle(length, width) {
    return length * width
}

export function cylinder(r, h) {
    let p = 3.14;
    return ((2 * p * r * h) + (2 * p * r * r))
}


export function filter(arr) {
    let FilteredSet = new Set(arr)
    return FilteredSet
}






