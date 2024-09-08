<template>
    <div class="app-container">
        <div class="center">
            <h2 class="center">Upload file</h2>
        </div>
        <div class="top">
            <form @submit.prevent="uploadFile">
                <input type="file" @change="handleFileChange" />
                <button type="submit" :disabled="isLoading">Upload</button>
            </form>

            <p v-if="isLoading">Uploading... {{ progress }}%</p>
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
            progress: 0,
            chunkSize: 1024 * 1024 * 2, // 2MB per chunk
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
            this.progress = 0;

            const totalChunks = Math.ceil(this.selectedFile.size / this.chunkSize);

            for (let i = 0; i < totalChunks; i++) {
                const chunk = this.selectedFile.slice(
                    i * this.chunkSize,
                    (i + 1) * this.chunkSize
                );

                const formData = new FormData();
                formData.append('file', chunk);
                formData.append('file_name', this.selectedFile.name);
                formData.append('chunk_index', i);
                formData.append('total_chunks', totalChunks);

                try {
                    await axios.post('http://127.0.0.1:8000/api/upload-chunk', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Accept' : 'application/json'
                        },
                    });

                    this.progress = Math.round(((i + 1) / totalChunks) * 100);
                } catch (error) {
                    this.uploadStatus = 'Error occurred during file upload.';
                    console.error(error);
                    this.isLoading = false;
                    return;
                }
            }

            this.isLoading = false;
            this.uploadStatus = 'File uploaded successfully!';
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