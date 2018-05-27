const rules = {
    name: 'required|string|min:4|max:20',
    price: 'required|number',
    yearOfManuf: 'required|number|min:4|max:4'
}

export default rules;