function printReport(pages){
    console.log("=================")
    console.log("Report")
    const sortedPages=sortPages(pages)
    for(sortedPage of sortedPages){
        const url=sortedPage[0]
        const hits=sortedPage[1]
        console.log(`Found ${hits} link to page: ${url}`)
    }
    console.log("END")
}
function sortPages(pages){
    pagesArr=Object.entries(pages)
    pagesArr.sort((a,b)=>{
        aHits=a[1]
        bHits=b[1]
        return b[1]-a[1]
    })
    return pagesArr
}
module.exports={
    sortPages,
    printReport
}