App = {
    load: async() => {
        // Load app...
    }
}

$(() => {
    $(window).load(() => {
        App.load()
    })
})