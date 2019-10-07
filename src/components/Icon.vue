<template>
    <svg class="icon" v-html="icons[name]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40"></svg>
</template>
<script>
const icons = {
    instagram: `
        <g id="instagram" transform="translate(0)">
            <g id="Group_15" data-name="Group 15">
            <path id="Path_16" data-name="Path 16" d="M20,3A17,17,0,1,1,3,20,17.019,17.019,0,0,1,20,3m0-3A20,20,0,1,0,40,20,20,20,0,0,0,20,0Z" fill="#fff"/>
            </g>
            <path id="Path_17" data-name="Path 17" d="M24.93,9.25H15.07a5.826,5.826,0,0,0-5.819,5.819v9.86a5.827,5.827,0,0,0,5.819,5.82h9.86a5.827,5.827,0,0,0,5.82-5.82v-9.86A5.827,5.827,0,0,0,24.93,9.25ZM20,25.879A5.879,5.879,0,1,1,25.879,20,5.885,5.885,0,0,1,20,25.879Zm6.02-10.371a1.737,1.737,0,1,1,1.736-1.737A1.739,1.739,0,0,1,26.02,15.508Z" fill="#fff"/>
            <path id="Path_18" data-name="Path 18" d="M19.513,15.574a3.939,3.939,0,1,0,3.939,3.939A3.944,3.944,0,0,0,19.513,15.574Z" transform="translate(0.487 0.487)" fill="#fff"/>
        </g>`,
    facebook: `
        <g id="facebook" transform="translate(0)">
            <g id="Group_13" data-name="Group 13" transform="translate(14.113 9.114)">
                <path id="Path_14" data-name="Path 14" d="M25.441,9.118l-2.822,0c-3.173,0-5.223,2.1-5.223,5.358v2.471H14.557a.444.444,0,0,0-.444.444v3.58a.444.444,0,0,0,.444.444H17.4v9.032a.443.443,0,0,0,.444.444h3.7a.443.443,0,0,0,.444-.444V21.41h3.319a.443.443,0,0,0,.444-.444v-3.58a.444.444,0,0,0-.443-.444H21.988v-2.1c0-1.006.239-1.518,1.551-1.518h1.9a.444.444,0,0,0,.444-.444V9.562A.442.442,0,0,0,25.441,9.118Z" transform="translate(-14.113 -9.114)" fill="#fff"/>
                </g>
                <g id="Group_14" data-name="Group 14">
                <path id="Path_15" data-name="Path 15" d="M20,3A17,17,0,1,1,3,20,17.019,17.019,0,0,1,20,3m0-3A20,20,0,1,0,40,20,20,20,0,0,0,20,0Z" fill="#fff"/>
            </g>
        </g>`,
    'tick-inside-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60">
        <path id="Path_35" data-name="Path 35" d="M17.7,24.3l-4.2,4.2L27,42,57,12,52.8,7.8,27,33.6ZM54,30A24,24,0,1,1,30,6a23.4,23.4,0,0,1,6.6.9l4.8-4.8A36.514,36.514,0,0,0,30,0,30,30,0,1,0,60,30Z" />
        </svg>
        `,
}
export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            icons,
        }
    },
}
</script>
