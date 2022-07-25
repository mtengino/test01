/**
 * Custom blocks
 */
enum millis {
    //% block="low"
    Low,
    //% block="medium"
    Medium,
    //% block="high"
    High
}

//% weight=1000 color=#00AFF0 icon="\uf121"
namespace EnginoBit {
    /**
      * Set Duration Blinking
      * @param x millis
      */
    //% block="Blink with delay"
    export function blink_led(x: millis): void {
    }
}