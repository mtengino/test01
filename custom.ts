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
      * Turn on led for duration
      * @param x millis
      */
    //% block="Blink with delay"
    export function led_on_for_duration(x: millis): void {
    }

    /**
      * Turn off led
      */
    //% block="Led Off"
    export function led_off(): void {
    }
}