const app = Vue.createApp({
    data() {
        return {
            title: "Gradient Gen",
            firstColor: "#7892f2",
            secondColor: "#4ff443",
            orientation: 1

        }
    },
    computed: {
        setColor() {
            if (this.orientation == 1) {
                return `background: linear-gradient(to top, ${this.firstColor}, ${this.secondColor});`;
            } else if (this.orientation == 2) {
                return `background: linear-gradient(to right, ${this.firstColor}, ${this.secondColor});`;
            } else if (this.orientation == 3) {
                return `background: linear-gradient(to bottom, ${this.firstColor}, ${this.secondColor});`;
            } else {
                return `background: linear-gradient(to left, ${this.firstColor}, ${this.secondColor});`;
            }
        }
    }
});