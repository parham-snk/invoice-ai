function getColData(c) {
    let col = String(c).split('تا')

    let tr = document.createElement("tr")
    let td_name = document.createElement("td")
    let td_qty = document.createElement("td")
    td_name = col[1]
    td_qty = col[0]
    tr.append(td_name)
    tr.append(td_qty)
    return tr

}
function getRows(t) {
    let text = String(t)
    if (text.split("و").length > 0) {
        let data = text.split("و").map(getColData)
        let table = document.createElement("table")
        table.append(data)
        document.append(table)
    }
}

getRows("20 تا چیپس و 10 تا بستنی")