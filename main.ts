basic.forever(function on_forever() {
    radio.onReceivedValue(function on_received_value(name: string, value: number) {
        if (name == "Do this:") {
            basic.showNumber(value)
        }
        
    })
    radio.setGroup(1)
})
