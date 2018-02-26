<template>
    <div>
        <header>
            <div class="text-center">
                <h1 class="d-inline">
                    Vue-sortable
                </h1>
                <img src="./assets/logo.png">
            </div>
            <p class="text-center">
                A Vue.js component that transforms your simple list into sortable list
            </p>
        </header>
        <section>
            <div class="list-header mx-auto">
                <h3> Demo </h3>
                <p>**Press ctrl key to select multiple items**</p>
            </div>
            <draggable-list
                    :items="items" 
                    id-field="id" 
                    list-class-name="list-group mx-auto" 
                    item-class-name="list-group-item"
                    selected-class-name="list-group-item-selected"
                    @change="onChange">
                    <template slot-scope="{item}">
                        {{item.label}}
                    </template>
            </draggable-list>
        </section>
        <footer class="text-center">
            <a href="https://github.com/Handit/vue-sortable" type="button" class="btn btn-light">View on Github</a>
        </footer>
    </div>
</template>

<script>
import DraggableList from "./components/draggableList.vue"

export default {
    components: { DraggableList },
    data: function () {
        return {
            items: [
                { id: 1, label: "Real Madrid" },
                { id: 2, label: "Barcelona" },
                { id: 3, label: "Arsenal" },
                { id: 4, label: "PSG" },
                { id: 5, label: "Bayern de Munique" },
                { id: 6, label: "Man. United" },
                { id: 7, label: "Juventos" },
                { id: 8, label: "Chelsea" },
                { id: 9, label: "Dorussia Dortmund" },
                { id: 10, label: "Atlético de Madrid" }
            ]
        }
    },
    methods: {
        onChange: function (moved, targetId, isAbove) {
            targetId = parseInt(targetId);
            if (isAbove) {
                moved = moved.reverse()
            }
            moved.forEach(itemId => {
                itemId = parseInt(itemId);
                let foundItem = this.items.find(item => item.id === itemId)
                if (foundItem) {
                    let index = this.items.indexOf(foundItem);
                    this.items.splice(index, 1)

                    let targetIdIndex = this.items.findIndex(item => item.id === targetId);
                    this.items.splice(targetIdIndex + (isAbove ? 0 : 1), 0, foundItem)
                }
            })
        }
    }
}
</script>

<style>
header {
  color: #4fc08d;
  height: 300px;
  padding: 50px;
}
footer {
  margin-top: 100px;
  background: #4fc08d;
  height: 150px;
  padding: 50px;
}
.list-header {
  width: 400px;
}
.list-group {
  width: 400px;
}
.list-group .list-group-item {
  padding: 10px;
  cursor: pointer;
}
.list-group .list-group-item-selected {
  background: #4fc08d;
}
.list-group .list-group-item .above {
  margin: -10px;
}
.list-group .list-group-item .above.over {
  background: #4fc08d;
}
</style>

