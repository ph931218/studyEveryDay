import Mock from 'mockJs'

export const testMock = Mock.mock('http://www.ph.com/mock', 'get', {
    'list|1-10': [{
        'id|+1': 1 + '>>'
    }]
})