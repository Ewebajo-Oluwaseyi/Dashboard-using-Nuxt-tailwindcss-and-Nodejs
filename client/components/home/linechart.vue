<template>
  <no-ssr>
    <div class="w-full md:w-1/2 p-3">
      <!--Graph Card-->
      <div class="bg-white border rounded shadow">
        <div class="border-b p-3">
          <h5 class="font-bold uppercase text-gray-600">Graph</h5>
        </div>
        <div class="p-5">
          <div class="btn-group btn-group-toggle">
            <label
              v-for="(item, index) in btn"
              :key="index"
              :class="{ active: item.value == radio }"
              class="btn btn-success"
            >
              <input
                v-model="radio"
                :name="dataLabel"
                :value="item.value"
                type="radio"
              />
              {{ item.label }}
            </label>
          </div>

          <div class="card-img-bottom">
            <chartjs-line
              :backgroundcolor="bgColor"
              :beginzero="beginZero"
              :bind="true"
              :bordercolor="borderColor"
              :data="data[radio]"
              :datalabel="dataLabel"
              :labels="labels[radio]"
            />
          </div>
        </div>
      </div>
      <!--/Graph Card-->
    </div>
  </no-ssr>
</template>

<script>
export default {
  data() {
    return {
      bgColor: '#81894e',
      beginZero: true,
      borderColor: '#81894e',
      btn: [
        { label: 'Today', value: 'day' },
        { label: 'This Week', value: 'week' }
      ],
      data: {
        day: [1, 3, 5, 3, 1],
        week: [12, 14, 16, 18, 11, 13, 15]
      },
      dataLabel: 'Foo',
      labels: {
        day: [8, 10, 12, 14, 16],
        week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      radio: 'day'
    }
  }
}
</script>
