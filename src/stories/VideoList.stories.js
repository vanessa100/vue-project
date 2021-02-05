import VideoList from '../components/VideoList.vue'

export default {

    title: 'VideoList',

};

export const toStorybook = () => ({

    components: { VideoList },

    template: '<VideoList />',

});



toStorybook.story = {

    name: 'videoItem',

};