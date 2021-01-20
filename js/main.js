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
            return `background: linear-gradient(to right, ${this.firstColor}, ${this.secondColor});`;
        }
    }
});