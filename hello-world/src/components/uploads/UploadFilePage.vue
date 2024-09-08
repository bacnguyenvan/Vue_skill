<template>
    <div class="app-container">
        <div class="center">
            <h2 class="center">Upload file</h2>
        </div>
        <div class="top">
            <form @submit.prevent="uploadFile">
                <input type="file" @change="handleFileChange" />
                <button type="submit">Upload</button>
            </form>
            <p v-if="isLoading">Uploading...</p>
            <p v-else-if="uploadStatus">{{ uploadStatus }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            selectedFile: null,
            uploadStatus: '',
            isLoading: false,
        };
    },
    methods: {
        handleFileChange(event) {
            this.selectedFile = event.target.files[0];
        },
        async uploadFile() {
            if (!this.selectedFile) {
                this.uploadStatus = 'Please select a file first.';
                return;
            }

            this.isLoading = true;
            this.uploadStatus = '';

            const formData = new FormData();
            formData.append('file', this.selectedFile);

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/upload-files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                });

                if (response.status === 200) {
                    this.uploadStatus = 'File uploaded successfully!';
                } else {
                    this.uploadStatus = 'Failed to upload file.';
                }
            } catch (error) {
                this.uploadStatus = 'Error occurred during file upload.';
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        },
    }
}
</script>

<style scoped>
@import "../../assets/css/style.css";


.input-block {
    margin: auto;
    text-align: center;
}

.input-block input {
    font-size: 20px;
    padding: 5px;
}

.input-block button {
    font-size: 20px;
    padding: 5px;
    margin-left: 20px;
}

</style>