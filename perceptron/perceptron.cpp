#include <cmath>
#include <map>
#include <vector>
#include <random>
#include <iostream>

double Sigmoid(double x)
{
    return 1/(1 + std::exp(-x));
}

class Neuron
{
    public:
        Neuron(std::size_t input_size){
            Weights_.resize(input_size);
            Reset();
        }

    private:
        std::vector<double> Weights_;
        double Bias_;

        double Compute(const std::vector<double>& x) const
        {
            if (x.size() != Weights_.size())
                throw "x.size() != Weights_.size()";
            double wx = 0.0;
            for (std::size_t i = 0; i< Weights_.size(); i ++){
                wx +=Weights_[i]*x[i];
            }
            return Sigmoid(wx+Bias_);
        }
        
        void Train(double a, const std::vector<std::pair<std::vector<double>,double>>& train_data)
        {
            std::size_t input_size = train_data[0].first.size();
            if (input_size != Weights_.size())
                throw "input_size != Weights_.size()";
            
            for (std::size_t i = 0; i < train_data.size(); ++i){
                double o = Compute(train_data[i].first);
                double t = train_data[i].second;
                for(std::size_t j = 0; j < input_size; ++j){
                    Weights_[j] += a * (t - o) * train_data[i].first[j];
                }

                Bias_ += a * (t - o);
            }
        
        }

        void Reset()
        {
            Bias_ = -1;
            std::random_device rd; // 시드 설정
            std::mt19937 random((rd())); // 난수 엔진
            // std::mt19937 random((std::random_device()())); // 26~27을 합침
            std::uniform_real_distribution<double> dist(-1,1); //분포 설정

            for (std::size_t i = 0; i <Weights_.size();++i){
                Weights_[i] = dist(random);
            }
        }
};


int main(){
        std::random_device rd;  
        std::mt19937 random((rd()));
        std::uniform_real_distribution<double> dist(-1,1);
        for ( int i = 0 ; i <10 ; i++){
            std::cout << dist(random) << std::endl;
        }
}