import { GET } from '~/utils/http';

const searchService = {
    async search(keyword) {
        try {
            return await (
                await GET('users/search', {
                    params: {
                        q: keyword,
                        type: 'less',
                    },
                })
            ).data;
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default searchService;
