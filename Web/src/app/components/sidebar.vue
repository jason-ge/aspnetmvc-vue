<template>
<div class="card sidebar" v-if="employee != null">
    <div class="sidebar-header" role="tab">
        SideBar Header
    </div>
    <div>
        <p>
            In fermentum et sollicitudin ac orci phasellus. Quisque egestas diam in arcu cursus. At elementum eu facilisis sed odio morbi quis. Tristique et egestas quis ipsum. Morbi tristique senectus et netus et malesuada fames ac. Dui nunc mattis enim ut tellus elementum sagittis. Laoreet sit amet cursus sit. Tempus egestas sed sed risus pretium quam vulputate dignissim. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Libero justo laoreet sit amet. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ac turpis egestas sed tempus. Nullam vehicula ipsum a arcu. Proin sagittis nisl rhoncus mattis. In egestas erat imperdiet sed euismod.
        </p>
    </div>
</div>
</template>

<script>

export default {
  props: ['employee'],
}

</script>

<style>
.sidebar{background: #eee;border-top: 1px solid $brand-color;padding: 1rem;border-radius: 0px;}
.sidebar-header{color: $brand-color;font-size:1.2em;font-weight:bold;margin-bottom: 0.5rem;}
.sidebar ul{margin-bottom:5px;margin-top:5px;}
.sidebar li{}

</style>

